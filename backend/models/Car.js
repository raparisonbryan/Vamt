/**
 * * Imports
 */
const mongoose = require("mongoose");

/**
 * * Modèle voiture
 * * userId : String — l'identifiant MongoDB unique de l'utilisateur qui a créé la voiture
 * * name : String — nom de la voiture
 * * category : String — catégorie de la voiture
 * * imageUrl : String — URL de l'image de la voiture
 * * price : Number — prix de la voiture
 * * description : String — description de la voiture
 */

const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Car", carSchema);
