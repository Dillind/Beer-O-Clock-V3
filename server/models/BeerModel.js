const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beerSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    // variation: {
    //     type: String,
    //     required: false
    // },
    origin: {
      type: String,
      required: true,
    },
    // state: {
    //     type: String,
    //     required: false
    // },
    // image: {
    //     type: String,
    //     required: false
    // },
    description: {
      type: String,
      required: true,
    },
    // size: {
    //     type: Number,
    //     required: true
    // },
    // size_unit: {
    //     type: String,
    //     required: true
    // },
    // standard_drinks: {
    //     type: Number,
    //     required: true
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beer", beerSchema);
