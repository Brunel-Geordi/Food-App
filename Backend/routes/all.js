const express = require('express');
const router = express.Router()

const burgersRouter = require('./burgers');
const boissonRouter = require('./boisson');
const snackRouter = require('./snacks');
const dessertRouter = require('./dessert');
const menuRouter = require('./menu');
const panierRouter = require('./panier');
const optionRouter = require('./option');


module.exports = {
    all : router,
    burgers : burgersRouter,
    boisson : boissonRouter,
    snack : snackRouter,
    dessert : dessertRouter,
    option : optionRouter,
    menu : menuRouter,
    dessert : dessertRouter,
    panier : panierRouter,
};

