require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../knexSetup");

router.put("/", async (req, res) => {
  const fidelity = await knex("users")
    .where("id", req.query.id)
    .select("fidelity")
    .then((result) => {
      return(result[0].fidelity);
    });
  await knex("users")
    .where("id", req.query.id)
    .update({
      fidelity:  parseInt(req.query.fidelity) ? parseInt(fidelity) + parseInt(req.query.fidelity) : parseInt(fidelity)
    })
    .then((result) => {
      res.status(201).send({ message: "Mise à jour reussi" });
    })
    .catch({ message: "Echech de la mise à jour" });
});

module.exports = router;
