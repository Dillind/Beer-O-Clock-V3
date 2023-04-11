require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const beerRoutes = require("./routes/beers");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/beers", beerRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on PORT", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
