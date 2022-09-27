const express = require("express");

const route = express.Router();
const patientController = require("../controllers/PatientControler");

route.get("/:id", patientController.patientHome);
route.get("/:id/info", patientController.detailInfo);

module.exports = route;
