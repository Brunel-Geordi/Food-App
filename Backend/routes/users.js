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
    .from('users')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur lors de l\' insertion dans users'})
});

router.post('/', async (req, res) => {
    knex('users')
      .insert({
        email : req.query.email,
        name : req.query.name,
        password : req.query.password
      })
      .then(result=>{
        console.log(result)
        res
        .status(201)
        .send({ message: "un user a été ajouté avec succès" });      })
      .catch({message : 'Erreur'})
});

module.exports = router;
