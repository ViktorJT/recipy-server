const {Schema, model} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema(
  {
    variants: [
      {
        type: ObjectId,
        ref: 'Variant',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Recipe', recipeSchema);
