require('dotenv').config();
const mongoose = require('mongoose');
const Cookbook = require('../models/Cookbook.model');

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const cookbooks = [
  {
    title: 'viktors cookbook',
    category: 'french',
    recipes: [],
    createdBy: ['5f6b48771ff3a955d6052979'],
  },
  {
    title: 'marijes cookbook',
    category: 'italian',
    recipes: [],
    createdBy: ['5f6b48771ff3a955d605297b'],
  },
  {
    title: 'eddies cookbook',
    category: 'dogfood',
    recipes: [],
    createdBy: ['5f6b48771ff3a955d605297a'],
  },
];

Cookbook.create(cookbooks)
  .then((cookbooksFromDB) => {
    console.log(`Created ${cookbooksFromDB.length} cookbooks`);
    mongoose.disconnect();
  })
  .catch((err) => console.error(`An error occurred while getting cookbooks from the DB: ${err}`));
