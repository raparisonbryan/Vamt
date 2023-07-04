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
    `mongodb+srv://raparisonbryan:SvqSlc56Raktq99F@vamt.92aoqsu.mongodb.net/Vamt?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

/**
 * * Régler les problèmes de CORS
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

/**
 * * Routes
 */
app.use("/api/cars", carRoutes);

/**
 * * Exports
 */
module.exports = app;
