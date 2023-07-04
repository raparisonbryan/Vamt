/**
 * imports
 */

const Car = require("../models/Car");

exports.createCar = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Veuillez nommer le véhicule" });
    return;
  }

  // Create a Car
  const car = new Car({
    name: req.body.name,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
  });

  // Save Car in the database
  car
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création du véhicule.",
      });
    });
};
/**
 * * Interroger une voiture
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

exports.getOneCar = (req, res, next) => {
  Car.findOne({
    _id: req.params.id,
  })
    .then((car) => res.status(200).json(car))
    .catch((error) =>
      res.status(404).json({
        error,
      })
    );
};

/**
 * * Modifier une voiture
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

exports.modifyCar = (req, res, next) => {
  const carId = req.params.id;

  Car.findByIdAndUpdate(carId, req.body, { new: true })
    .then((updatedCar) => {
      if (!updatedCar) {
        return res.status(404).json({ message: "Voiture non trouvée" });
      }
      res.json(updatedCar);
    })
    .catch((err) => {
      res.status(400).json({
        message:
          err.message ||
          "Une erreur s'est produite lors de la mise à jour de la voiture.",
      });
    });
};

/**
 * * Supprimer une voiture
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

exports.deleteCar = (req, res, next) => {
  const carId = req.params.id;

  Car.findByIdAndRemove(carId)
    .then((deletedCar) => {
      if (!deletedCar) {
        return res.status(404).json({ message: "Voiture non trouvée" });
      }
      res.json(deletedCar);
    })
    .catch((err) => {
      res.status(400).json({
        message:
          err.message ||
          "Une erreur s'est produite lors de la suppression de la voiture.",
      });
    });
};

/**
 * * Interroger toutes les voitures
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

exports.getAllCars = (req, res, next) => {
  Car.find()
    .then((cars) => res.status(200).json(cars))
    .catch((error) =>
      res.status(400).json({
        error,
      })
    );
};
