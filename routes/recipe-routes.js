const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Recipe = require('../models/Recipe.model');

// ============
// * ADD Recipe
// ============

router.post('/recipes/add', (req, res) => {
  const {title, ingredients, instructions, image, duration} = req.body;
  // createdBy <= this needs to be added later
  Recipe.create({
    title,
    ingredients,
    instructions,
    image,
    duration,
    // createdBy: req.params.SOMTHINE
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// ?================================
// ? GET All Recipes
// ? Not sure this is really needed?
// ?================================

router.get('/recipes', (_, res) => {
  Recipe.find()
    // .populate('createdBy')
    .then((allTheRecipes) => {
      res.json(allTheRecipes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// !=============================
// ! GET All Recipes from User
// TODO: Add this for profile page
// !=============================

// router.get('/:userId/recipes', (_, res) => {
//   Recipe.find({something something something})
//     .populate('createdBy')
//     .then((allTheRecipes) => {
//       res.json(allTheRecipes);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// ====================
// * GET Recipe by ID
// ====================

router.get('/recipes/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findById(req.params.id)
    .populate('createdBy')
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.json(error);
    });
});

// =======================
// * UPDATE Recipe by ID
// =======================

router.put('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Recipe with id ${req.params.id} was updated successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

// =======================
// * DELETE Recipe by ID
// =======================

router.delete('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Recipe with ${req.params.id} was removed successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
