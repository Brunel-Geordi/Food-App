require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const knex = require('../knexSetup')
const salt = bcrypt.genSaltSync(10);

router.post("/", async (req, res) => {
  const password = bcrypt.hashSync(req.query.password, salt);
  const token = bcrypt.hashSync((req.query.password + req.query.mail + new Date), salt);
  const emailExists = await knex("users")
    .select("id")
    .where("mail", req.query.mail)
    .first();

  if (emailExists) {
    return res.status(400).send({ message: "L'adresse email existe déjà" });
  }

  await knex("users")
    .insert({
      name: req.query.name,
      mail: req.query.mail,
      password: password,
      token: token
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "un user a été ajouté avec succès" });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ message: "Une erreur est survenue lors de l'insertion dans la base de données" });
    });
});

module.exports = router;