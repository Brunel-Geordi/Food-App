const express = require('express');
const router = express.Router()

const burgersRouter = require('./burgers');
const boissonRouter = require('./boisson');
const snackRouter = require('./snacks');
const dessertRouter = require('./dessert');
const menuRouter = require('./menu');



router
    // .use(usersRouter)    
    .use(burgersRouter)
    .use(snackRouter)
    .use(boissonRouter)
    .use(dessertRouter)

module.exports = {
    all : router,
    burgers : burgersRouter,
    boisson : boissonRouter,
    snack : snackRouter,
    dessert : dessertRouter,
    menu : menuRouter,
    dessert : dessertRouter,
};

