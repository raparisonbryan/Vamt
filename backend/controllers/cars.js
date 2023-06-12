/**
 * imports
 */

const Car = require("../models/Car");
const fs = require("fs");

/**
 * * Créer une voiture avec les do
 *
 */

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
  const carObject = req.file
    ? {
        ...JSON.parse(req.body.car),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : {
        ...req.body,
      };
  Car.updateOne(
    {
      _id: req.params.id,
    },
    {
      ...carObject,
      _id: req.params.id,
    }
  )
    .then(() =>
      res.status(200).json({
        message: "Objet modifié !",
      })
    )
    .catch((error) =>
      res.status(400).json({
        error,
      })
    );
};

/**
 * * Supprimer une voiture
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

exports.deleteCar = (req, res, next) => {
  Car.findOne({
    _id: req.params.id,
  })
    .then((car) => {
      const filename = car.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Car.deleteOne({
          _id: req.params.id,
        })
          .then(() =>
            res.status(200).json({
              message: "Objet supprimé !",
            })
          )
          .catch((error) =>
            res.status(400).json({
              error,
            })
          );
      });
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
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
