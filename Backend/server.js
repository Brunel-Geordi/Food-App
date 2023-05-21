const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('/image', express.static('IMG')); 
const port = 5000;

const signUp = require('./routes/signup');
const login = require('./routes/login');
const router = require('./routes/all');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extends:true}));

app.use('/signup', signUp);
app.use('/login', login);
app.use('/burgers', router.burgers);
app.use('/boisson', router.boisson);
app.use('/snack', router.snack);
app.use('/dessert', router.dessert);
app.use('/menu', router.menu);
app.use('/panier', router.panier);
app.use('/option', router.option);
app.use('/all', router.burgers);

const server = app.listen(port, function(){
  const host = server.address().address;
  const port = server.address().port;
});