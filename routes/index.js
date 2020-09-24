const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Cookbook = require('../models/Cookbook.model');

router.get('/', (_, res) => {
  Cookbook.find()
    .then((cookbooks) => res.render('index', {cookbooks}))
    .catch((err) => console.error(`error finding cookbooks: ${err}`));
});

module.exports = router;
