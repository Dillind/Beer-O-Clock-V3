const express = require("express");
const {
  createBeer,
  getBeers,
  getBeer,
  deleteBeer,
  updateBeer,
} = require("../controllers/beerController");

const router = express.Router();

// GET all beers
router.get("/", getBeers);

// GET a single beer
router.get("/:id", getBeer);

// POST a new beer
router.post("/", createBeer);

// DELETE a beer
router.delete("/:id", deleteBeer);

// UPDATE a beer
router.patch("/:id", updateBeer);

module.exports = router;
