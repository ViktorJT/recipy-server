const mongoose = require('mongoose');
require('dotenv').config();

const Recipe = require('../models/Recipe.model');

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const recipes = [
  {
    cookbookId: '5f6b4add15d78a569a32c08e',
    title: 'Pasta Carbonara',
    level: 'Easy',
    ingredients: ['Pasta', 'Eggs', 'Bacon'],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cuisine: 'French',
    dishType: 'main_course',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1533151875%2Fwhole-wheat-pasta-carbonara-1809-p116.jpg%3Fitok%3Ds4eLZHit',
    duration: 10,
  },
  {
    cookbookId: '5f6b4add15d78a569a32c08f',
    title: 'Cacio e Pepe',
    level: 'Easy',
    ingredients: ['Tagliatelle', 'Pepper', 'Salt', 'Olive oil'],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cuisine: 'Italian',
    dishType: 'main_course',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1533151875%2Fwhole-wheat-pasta-carbonara-1809-p116.jpg%3Fitok%3Ds4eLZHit',
    duration: 5,
  },
  {
    cookbookId: '5f6b4add15d78a569a32c090',
    title: 'Croissant',
    level: 'Medium',
    ingredients: ['Butter', 'Sugar', 'Eggs'],
    instructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cuisine: 'French',
    dishType: 'snack',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1533151875%2Fwhole-wheat-pasta-carbonara-1809-p116.jpg%3Fitok%3Ds4eLZHit',
    duration: 20,
  },
];

Recipe.create(recipes)
  .then((recipesFromDB) => {
    console.log(`Created ${recipesFromDB.length} recipes`);
    mongoose.disconnect();
  })
  .catch((err) => console.error(`An error occurred while getting books from the DB: ${err}`));
