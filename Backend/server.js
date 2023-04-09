const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const bcrypt = require("bcrypt")
app.use('/image', express.static('IMG'))


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


app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extends:true}));


var server = app.listen(4548, function(){
  var host = server.address().address
  var port = server.address().port
})

app.get('/users', function(req, res){
  knex
    .select('*')
    .from('users')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
})

app.post('/users', async (req, res) => {
    knex('users')
      .insert({
        email : req.query.email,
        name : req.query.name,
        password : req.query.password
      })
      .then(result=>{
        console.log(result)
        res.send({message : 'Reussi'})
      })
      .catch({message : 'Erreur'})
})

app.post('/burgers', async (req, res) => {
  knex('burgers')
    .insert({
      name : req.query.name,
      image : req.query.image,
      price : req.query.price
    })
    .then(result=>{
      console.log(result)
      res.send({message : 'Reussi'})
    })
    .catch({message : 'Erreur'})
})

app.get('/burgers', function(req, res){
  knex
    .select('*')
    .from('burgers')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
})

app.post('/boisson', async (req, res) => {
  knex('boisson')
    .insert({
      name : req.query.name,
      image : req.query.image,
      price : req.query.price
    })
    .then(result=>{
      console.log(result)
      res.send({message : 'Reussi'})
    })
    .catch({message : 'Erreur'})
})

app.get('/boisson', function(req, res){
  knex
    .select('*')
    .from('boisson')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
})

app.post('/snack', async (req, res) => {
  knex('snacks')
    .insert({
      name : req.query.name,
      image : req.query.image,
      price : req.query.price
    })
    .then(result=>{
      console.log(result)
      res.send({message : 'Reussi'})
    })
    .catch({message : 'Erreur'})
})

app.get('/snack', function(req, res){
  knex
    .select('*')
    .from('snacks')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
})

app.post('/dessert', async (req, res) => {
  knex('desserts')
    .insert({
      name : req.query.name,
      image : req.query.image,
      price : req.query.price
    })
    .then(result=>{
      console.log(result)
      res.send({message : 'Reussi'})
    })
    .catch({message : 'Erreur'})
})

app.get('/dessert', function(req, res){
  knex
    .select('*')
    .from('desserts')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
    .catch({message : 'Erreur'})
})

// app.get('/all', function(req, res){
//   knex
//     .select('*')
//     .from('desserts', "burgers")
//     .then(result=>{
//       console.log(result)
//       res.send(result)
//     })
//     .catch({message : 'Erreur'})
// })