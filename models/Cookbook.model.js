const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const CookbookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    recipes: [
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

module.exports = model('Cookbook', CookbookSchema);
