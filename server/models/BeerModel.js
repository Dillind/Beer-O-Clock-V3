const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beerSchema = new Schema(
  {
    brand: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
    },
    variation: {
      type: String,
      required: false,
    },
    origin: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    size_unit: {
      type: String,
      required: true,
    },
    standard_drinks: {
      type: Number,
      required: true,
    },
    alcohol_volume: {
      type: String,
      required: true,
    },
    closure: {
      type: String,
      required: true,
    },
    beer_style: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beer", beerSchema);
