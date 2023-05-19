require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("desserts")
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch({ message: "Erreur" });
});

router.post("/", async (req, res) => {
  await knex("desserts")
    .insert({
      name: req.query.name,
      image: req.query.image,
      price: req.query.price,
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "Le dessert a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
