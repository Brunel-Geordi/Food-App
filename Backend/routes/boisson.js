const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'root',
      database : 'malewa'
    }
  });
router.get('/', function(req, res){
  knex
    .select('*')
    .from('boisson')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
});

router.post('/', async (req, res) => {
  knex('boisson')
    .insert({
      name : req.query.name,
      image : req.query.image,
      price : req.query.price
    })
    .then(result=>{
      console.log(result)
      res
        .status(201)
        .send({ message: "La boisson a été ajouté avec succès" });    })
    .catch({message : 'Erreur'})
});

module.exports = router;
