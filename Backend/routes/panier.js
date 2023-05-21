require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knexSetup");

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("panier")
    .where("id_users", req.query.id_users)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch({ message: "Impossible de recuperé les données du panier" });
});

router.post("/", async (req, res) => {
  var option = req.query.snack;
  var boisson = req.query.boisson;
  if (boisson == "null" && option == "null") {
    boisson = null;
    option = null;
  }
  await knex("panier")
    .insert({
      montant: req.query.montant,
      datetime: knex.fn.now(),
      qte: req.query.qte,
      name: req.query.name,
      boisson: boisson,
      snack: option,
      image: req.query.image,
      id_users: req.query.id_users,
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "Le menu a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

router.delete("/", async (req, res) => {
  await knex("panier")
    .where("id", req.query.id)
    .del()
    .then((result) => {
      console.log("Element supprimé avec succes");
      res.send("Element supprimé avec succes");
      res.send(result);
    })
    .catch({ message: "Impossible de recuperé les données du panier" });
});

router.put("/", async (req, res) => {
  var option = req.query.snack;
  var boisson = req.query.boisson;
  if (boisson == "null" && option == "null") {
    boisson = null;
    option = null;
  }
  await knex("panier")
    .where("id", req.query.id)
    .update({
      montant: req.query.montant,
      datetime: req.query.datetime,
      qte: req.query.qte,
      name: req.query.name,
      boisson: boisson,
      snack: option,
      image: req.query.image,
    })
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "Mise à jour reussi" });
    })
    .catch({ message: "Impossible de recuperé les données du panier" });
});

module.exports = router;
