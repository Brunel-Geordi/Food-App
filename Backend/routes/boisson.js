require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("boisson")
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch({ message: "Erreur" });
});

router.post("/", async (req, res) => {
  await knex("boisson")
    .insert({
      name: req.query.name,
      image: req.query.image,
      price: req.query.price,
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "La boisson a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
