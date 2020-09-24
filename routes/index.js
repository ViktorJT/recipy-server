const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Recipe = require('../models/Recipe.model');

router.get('/', (_, res) => {
  Recipe.find()
    .then((recipes) => res.render('index', {recipes}))
    .catch((err) => console.error(`error finding recipes: ${err}`));
});

module.exports = router;
