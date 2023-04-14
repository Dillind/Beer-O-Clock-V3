const Beer = require("../models/BeerModel");
const mongoose = require("mongoose");

// get all beers
const getBeers = async (req, res) => {
  const beers = await Beer.find({}).sort({ createdAt: -1 }); // descending order (newest at the top)
  res.status(200).json(beers);
};

// get a single beer
const getBeer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such beer" });
  }
  const beer = await Beer.findById(id);
  if (!beer) {
    return res.status(404).json({ error: "No such beer" });
  }
  res.status(200).json(beer);
};

// create a new beer
const createBeer = async (req, res) => {
  const {
    brand,
    variation,
    origin,
    state,
    image,
    description,
    size,
    size_unit,
    standard_drinks,
    alcohol_volume,
    closure,
    beer_style,
  } = req.body;
  try {
    const beer = await Beer.create({
      brand,
      variation,
      origin,
      state,
      image,
      description,
      size,
      size_unit,
      standard_drinks,
      alcohol_volume,
      closure,
      beer_style,
    });
    res.status(200).json(beer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a beer
const deleteBeer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such beer" });
  }
  const beer = await Beer.findOneAndDelete({ _id: id });
  if (!beer) {
    return res.status(404).json({ error: "No such beer" });
  }
  res.status(200).json(beer);
};

// update a beer
const updateBeer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such beer" });
  }
  const beer = await Beer.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!beer) {
    return res.status(404).json({ error: "No such beer" });
  }
  res.status(200).json(beer);
};

module.exports = {
  createBeer,
  getBeers,
  getBeer,
  deleteBeer,
  updateBeer,
};
