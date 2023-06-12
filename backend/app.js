/**
 * * Imports
 */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const carRoutes = require("./routes/car");

const app = express();

/*
 * * Connexion à la base de données MongoDB
 */
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_LINK}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
app.use(express.json());

/**
 * * Routes
 */
app.use("/api/cars", carRoutes);

/**
 * * Exports
 */
module.exports = app;
