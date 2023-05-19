require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("option")
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch({ message: "Erreur" });
});

router.post("/", async (req, res) => {
  await knex("option")
    .insert({
      name: req.query.name,
      image: req.query.image,
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "L'accompagnrement a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
