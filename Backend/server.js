const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const bcrypt = require("bcrypt")


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