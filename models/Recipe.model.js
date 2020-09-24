const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema(
  {
    cookbookId: {
      type: ObjectId,
      ref: 'Cookbook',
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
    },
    ingredients: [String],
    instructions: String,
    cuisine: {
      type: String,
      required: true,
    },
    dishType: {
      type: String,
      enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'],
    },
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