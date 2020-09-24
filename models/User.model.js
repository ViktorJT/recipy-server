const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    recipes: [
      {
        type: ObjectId,
        ref: 'Recipe',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
