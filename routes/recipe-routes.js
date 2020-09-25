const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Recipe = require('../models/Recipe.model');
const Variant = require('../models/Variant.model');

// ================
// * ADD NEW RECIPE
// ================

router.post('/recipes/add', (req, res) => {
  const {title, ingredients, instructions, image, duration} = req.body;
  Recipe.create({
    variants: [],
  })
    .then((res) => {
      Variant.create({
        title,
        ingredients,
        instructions,
        image,
        duration,
        variantOf: res._id,
      })
        .then((variant) => {
          return Recipe.findByIdAndUpdate(variant.variantOf, {
            $push: {variants: variant._id},
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// ================
// * COPY VARIANT
// ================

router.post('/recipes/copy', (req, res) => {
  const {title, ingredients, instructions, image, duration, variantOf} = req.body;

  Variant.create({
    title,
    ingredients,
    instructions,
    image,
    duration,
    variantOf,
  })
    .then((res) => {
      Recipe.findByIdAndUpdate(variantOf, {
        $push: {variants: res._id},
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// =================
// * GET ALL RECIPES
// =================

router.get('/recipes', (_, res) => {
  Recipe.find()
    .populate('variants')
    .then((allRecipes) => {
      res.json(allRecipes);
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

// ===================
// * GET RECIPE BY ID
// ===================

router.get('/recipes/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Recipe.findById(req.params.id)
    // ! ===================================
    // ! .populate('createdBy') <= NEED THIS
    // ! ===================================
    .populate('variants')
    .then((variant) => {
      res.status(200).json(variant);
    })
    .catch((error) => {
      res.json(error);
    });
});

// ===================
// * GET VARIANT BY ID
// ===================

router.get('/recipes/variant/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Variant.findById(req.params.id)
    // ! ===================================
    // ! .populate('createdBy') <= NEED THIS
    // ! ===================================
    .populate('variantOf')
    .then((variant) => {
      res.status(200).json(variant);
    })
    .catch((error) => {
      res.json(error);
    });
});

// ======================
// * UPDATE VARIANT BY ID
// ======================

router.put('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Variant.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Variant with id ${req.params.id} was updated successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

// ======================
// * DELETE VARIANT BY ID
// ======================

router.delete('/recipes/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  console.log(req.params);

  Recipe.find({variants: [req.params.id]}).then((res) => {
    console.log(typeof res.variants);
    // if (res.variants.length > 1) {
    //   console.log('remove variant');
    //   // Variant.findByIdAndRemove(req.params.id)
    //   //   .then(() => {
    //   //     res.json({message: `Variant with ${req.params.id} was removed successfully.`});
    //   //   })
    //   //   .catch((error) => {
    //   //     res.json(error);
    //   //   });
    // } else {
    //   console.log('remove variant & recipe');
    // }
  });

  // Recipe.findByIdAndRemove(req.params.id)
  //   .then((res) => {
  //     Variant.create({
  //       title,
  //       ingredients,
  //       instructions,
  //       image,
  //       duration,
  //       variantOf: res._id,
  //     })
  //       .then((variant) => {
  //         return Recipe.findByIdAndUpdate(variant.variantOf, {
  //           $push: {variants: variant._id},
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   })
  //   .catch((err) => console.log(err));

  // Variant.findByIdAndRemove(req.params.id)
  //   .then(() => {
  //     res.json({message: `Variant with ${req.params.id} was removed successfully.`});
  //   })
  //   .catch((error) => {
  //     res.json(error);
  //   });
});

module.exports = router;
