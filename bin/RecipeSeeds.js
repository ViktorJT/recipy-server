require('dotenv').config();
const mongoose = require('mongoose');

const Recipe = require('../models/Recipe.model');

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const recipes = [{}, {}, {}, {}, {}, {}];

Recipe.create(recipes)
  .then((recipesFromDB) => {
    console.log(`Created ${recipesFromDB.length} recipes`);
    mongoose.disconnect();
  })
  .catch((err) => console.error(`An error occurred while getting recipes from the DB: ${err}`));
