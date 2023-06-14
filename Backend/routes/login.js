require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("users")
    .where("mail", req.query.mail)
    .then((result) => {
      if (result.length > 0) {
        const secret = bcrypt.compareSync(
          req.query.password,
          result[0].password
        );
        if (secret) {
          res.send(result);
          return res
        }
      }  
      res.status(401).send({ message: "Mail ou mot de passe incorrect" });
      
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Erreur lors de la récupération de l'utilisateur" });
    });
});

module.exports = router;