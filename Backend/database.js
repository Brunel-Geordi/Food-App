const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const mysql = require('mysql2')
const port = 3306

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extends:true}));

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  port:'3306',
  database:'malewa'
})

var server = app.listen(4548, function(){
  var host = server.address().address
  var port = server.address().port
})

con.connect(function(error){
  if(error) console.log(error);
  else console.log("Connected");
});

app.get('/users', function(req, res){
  con.query('select * from users', function(error, rows, fields){
    if(error) console.log(error);
    else{
      console.log(rows)
      res.send(rows);
    }
  })
})

app.post('/users', function(req, res){
  con.query("INSERT INTO users(email, name, password) VALUES ('" + req.headers.email +"','"+ req.headers.name +"','"+ req.headers.password + "');", function(error, rows, fields){
    if(error) console.log(error);
    else{
      console.log(rows)
      res.send(rows);
    }
  })
})