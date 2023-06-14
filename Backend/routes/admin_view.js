require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knexSetup");

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("commande")
    .where('status', '!=', 'Retiré')
    .then((result) => {
      res.send(result);
    })
    .catch({ message: "Erreur" });
});

router.delete("/", async (req, res) => {
  await knex("panier")
    .where("id", req.query.id)
    .del()
    .then((result) => {
      res.send("Element supprimé avec succes");
      res.send(result);
    })
    .catch({ message: "Impossible de recuperé les données du panier"});
});

router.put("/", async (req, res) => {
  await knex("commande")
    .where("id", req.query.id)
    .update({
      status: req.query.status,
    })
    .then((result) => {
    
      res.status(201).send({ message: "Mise à jour reussi" });
    })
    .catch({ message: "Echech de la mise à jour"});
});

module.exports = router;
