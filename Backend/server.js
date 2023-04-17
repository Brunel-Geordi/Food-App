const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('/image', express.static('IMG'))

const usersRouter = require('./routes/users');
const burgersRouter = require('./routes/burgers');
const boissonRouter = require('./routes/boisson');
const snackRouter = require('./routes/snacks');
const dessertRouter = require('./routes/dessert');
const menuRouter = require('./routes/menu');

const port = 5000;

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extends:true}));

app.use('/users', usersRouter);
app.use('/burgers', burgersRouter);
app.use('/boisson', boissonRouter);
app.use('/snack', snackRouter);
app.use('/dessert', dessertRouter);
app.use('/menu', menuRouter);

const server = app.listen(port, function(){
  const host = server.address().address;
  const port = server.address().port;
});