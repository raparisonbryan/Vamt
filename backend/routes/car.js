/**
 * imports
 */

const express = require("express");
const router = express.Router();
const carControl = require("../controllers/cars");

/**
 * * Routes
 */
router.get("/", carControl.getAllCars);
router.post("/", carControl.createCar);
router.get("/:id", carControl.getOneCar);
router.put("/:id", carControl.modifyCar);
router.delete("/:id", carControl.deleteCar);

/**
 * * Export
 */
module.exports = router;
