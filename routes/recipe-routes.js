const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Cookbook = require('../models/Cookbook.model');
const Recipe = require('../models/Recipe.model');

// ========================
// * ADD Recipe to Cookbook
// ========================

router.post('/cookbooks/:cookbookId/recipes', (req, res, next) => {
  const {title, ingredients, instructions, image, duration} = req.body;

  Recipe.create({
    title,
    ingredients,
    instructions,
    image,
    duration,
  })
    .then((response) => {
      console.log(response, 'updating cookbook');
      return Cookbook.findByIdAndUpdate(req.body.cookbookId, {
        $push: {recipes: response._id},
      });
    })
    .then((theResponse) => {
      console.log(theResponse, 'cookbook updated');
      res.json(theResponse);
    })
    .catch((err) => {
      console.log(err, 'something went wrong');
      res.json(err);
    });
});

// ================================
// * GET Recipe by ID from Cookbook
// ================================

router.get('/cookbooks/:cookbookId/recipes/:recipeId', (req, res, next) => {
  // ? can't i use the cookbookId here from the params to make this more effective?

  Recipe.findById(req.params.recipeId)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((error) => {
      res.json(error);
    });
});

// =================================
// * UPDATE Recipe by ID in Cookbook
// =================================

router.put('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Recipe with ${req.params.id} was updated successfully.`});
    })
    .catch((err) => {
      res.json(err);
    });
});

// =================================
// * DELETE Recipe by ID in Cookbook
// =================================

router.delete('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Recipe with ${req.params.id} is removed successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
