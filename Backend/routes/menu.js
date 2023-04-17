const express = require("express");
const router = express.Router();
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "malewa",
  },
});
router.get("/", function (req, res) {
  knex
    .select("*")
    .from("menu")
    .then((result) => {
      console.log(result);
      res.send(result)
    })
    .catch({ message: "Impossible de recuperé les données de menu" });
});

router.post("/", async (req, res) => {
  knex("menu")
    .insert({
      name: req.query.name,
      image: req.query.image,
      price: req.query.price,
      id_burger: req.query.id_burger,
    })
    .then((result) => {
      console.log(result);
      res
        .status(201)
        .send({ message: "Le menu a été ajouté avec succès" });
    })
    .catch({ message: "Erreur" });
});

module.exports = router;
