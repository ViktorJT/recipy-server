const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Cookbook = require('../models/Cookbook.model');
const Recipe = require('../models/Recipe.model');

// ========================
// * ADD Recipe to Cookbook
// This WORKS, BUT need to check later if the cookbookId shouldn't come from the body of the form submit instead of from the params? (see the Ironhack tutorial from paragraph 'At the very beginning, we created two files inside routes folder. One was project-routes.js, which we filled with routes, and now we will do the same for task-routes.js:')
// ========================

router.post('/:userId/recipes', (req, res, next) => {
  const {title, ingredients, instructions, image, duration} = req.body;

  Recipe.create({
    title,
    ingredients,
    instructions,
    image,
    duration,
  })
    .then((response) => {
      return Cookbook.findByIdAndUpdate(req.params.cookbookId, {
        $push: {recipes: response._id},
      });
    })
    .then((theResponse) => {
      res.json(theResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

// !===============================
// ! GET All Recipes
// ! This should be on the homepage
// !===============================

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

router.put('/cookbooks/:cookbookId/recipes/:recipeId', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndUpdate(req.params.recipeId, req.body)
    .then(() => {
      res.json({message: `Recipe with id ${req.params.recipeId} was updated successfully.`});
    })
    .catch((err) => {
      res.json(err);
    });
});

// =================================
// * DELETE Recipe by ID in Cookbook
// =================================

router.delete('/cookbooks/:cookbookId/recipes/:recipeId', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.recipeId)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndRemove(req.params.recipeId)
    .then(() => {
      res.json({message: `Recipe with ${req.params.recipeId} is removed successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
