require('dotenv').config(); 
const express = require("express");
const router = express.Router();
const knex = require('../knexSetup')

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("commande")
    .where("id_users", req.query.id_users)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch({ message: "Erreur" });
});

router.post("/", async (req, res) => {
    var snack = req.query.snack;
    var boisson = req.query.boisson;
    if (boisson == "null" && snack == "null") {
      boisson = null;
      snack = null;
    }
  await knex("commande")
    .insert({
      qte: req.query.qte,
      montant: req.query.montant,
      name: req.query.name,
      boisson: boisson,
      snack: snack,
      id_users: req.query.id_users
    })
    .then((result) => {
      console.log(result);
      res
        .status(201)
        .send({ message: "La liste a été mis à jour avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
