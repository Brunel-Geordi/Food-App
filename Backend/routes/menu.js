require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("menu")
    .then((result) => {
      res.send(result);
    })
    .catch({ message: "Impossible de recuperé les données de menu" });
});

router.post("/", async (req, res) => {
  await knex("menu")
    .insert({
      name: req.query.name,
      image: req.query.image,
      price: req.query.price,
      id_burger: req.query.id_burger,
    })
    .then((result) => {
      res.status(201).send({ message: "Le menu a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
