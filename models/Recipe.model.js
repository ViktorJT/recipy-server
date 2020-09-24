const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema(
  {
    original: Boolean,
    title: {
      type: String,
      required: true,
    },
    ingredients: String,
    instructions: String,
    image: {
      type: String,
      default: 'https://images.media-allrecipes.com/images/75131.jpg',
    },
    duration: {
      type: Number,
      min: 0,
    },
    likes: {
      type: Number,
      min: 0,
      default: 0,
    },
    variants: [
      {
        type: ObjectId,
        ref: 'Recipe',
      },
    ],
    createdBy: {
      type: ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Recipe', recipeSchema);
