require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User.model');

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const users = [
  {
    username: 'viktor',
    email: 'viktor@viktor.com',
    passwordHash: 'viktor',
    cookbooks: ['5f6b48771ff3a955d6052979'],
  },
  {
    username: 'marije',
    email: 'marije@marije.com',
    passwordHash: 'marije',
    cookbooks: ['5f6b48771ff3a955d605297a'],
  },
  {
    username: 'eddie',
    email: 'eddie@eddie.com',
    passwordHash: 'eddie',
    cookbooks: ['5f6b48771ff3a955d605297b'],
  },
];

User.create(users)
  .then((usersFromDB) => {
    console.log(`Created ${usersFromDB.length} users`);
    mongoose.disconnect();
  })
  .catch((err) => console.error(`An error occurred while getting users from the DB: ${err}`));
