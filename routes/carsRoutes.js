const express = require("express");
const router = express.Router();
const validator = require("../middleware/validator");

const controller = require("../controllers/carsController");

// Create a new car object and Validate with validateCar ajv package
router.post("/add",validator.validateCar, controller.createCars);
// Get the list of cars
router.get("/list", controller.listCars);
// Get the car by Id
router.get("/:id", controller.getCarById);
// Update car by Id and validate with validateUpdate ajv package
router.patch("/update/:id",validator.validateUpdate, controller.updateCarsById);
// Delete car by Id
router.delete("/delete/:id", controller.deleteCar);


module.exports = router;