const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: [String],
    instructions: String,
    image: {
      type: String,
      default: 'https://images.media-allrecipes.com/images/75131.jpg',
    },
    duration: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Recipe', recipeSchema);
