const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const variantSchema = new Schema(
  {
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
    serves: {
      type: Number,
    },
    difficulty: {
      type: String,
    },
    variantOf: {
      type: ObjectId,
      ref: 'Recipe',
    },
    createdBy: {
      type: ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Variant', variantSchema);
