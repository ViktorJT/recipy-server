const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Cookbook = require('../models/Cookbook.model');

router.get('/', (_, res) => {
  Cookbook.find()
    .then((cookbooks) => res.render('index', {cookbooks}))
    .catch((err) => console.error(`error finding cookbooks: ${err}`));
});

// ! FIRST GO THROUGH THE TUTORIAL FOR THE BACKEND ROUTES !!!!!

router.post('/cookbooks', (req, res, next) => {
  Cookbook.create({
    title: req.body.title,
    description: req.body.description,
    createdBy: req.user._id,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
