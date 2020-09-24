const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Cookbook = require('../models/Cookbook.model');

// ==============
// * ADD Cookbook
// ==============

router.post('/cookbooks', (req, res) => {
  const {
    title,
    // createdBy <= this needs to be added later
  } = req.body;
  Cookbook.create({
    title,
    // createdBy, <= this needs to be added later
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// ===================
// * GET All Cookbooks
// ===================

router.get('/cookbooks', (_, res) => {
  Cookbook.find()
    .populate('createdBy')
    .populate('recipes')
    .then((allTheCookbooks) => {
      res.json(allTheCookbooks);
    })
    .catch((err) => {
      res.json(err);
    });
});

// !============================
// ! GET All Cookbooks from User
// !============================

// router.get('/:userId/cookbooks', (_, res) => {
//   Cookbook.find({something something something})
//     .populate('createdBy')
//     .populate('recipes')
//     .then((allTheCookbooks) => {
//       res.json(allTheCookbooks);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// ====================
// * GET Cookbook by ID
// ====================

router.get('/cookbooks/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Cookbook.findById(req.params.id)
    .populate('recipes')
    .populate('createdBy')
    .then((cookbook) => {
      res.status(200).json(cookbook);
    })
    .catch((error) => {
      res.json(error);
    });
});

// =======================
// * UPDATE Cookbook by ID
// =======================

router.put('/cookbooks/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Cookbook.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Cookbook with ${req.params.id} was updated successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

// =======================
// * DELETE Cookbook by ID
// =======================

router.delete('/cookbooks/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'Specified id is not valid'});
    return;
  }

  Cookbook.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Cookbook with ${req.params.id} was removed successfully.`});
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
