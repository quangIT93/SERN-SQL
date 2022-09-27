// const { Router } = require("express");
const express = require("express");
const route = express.Router();

const adminController = require("../Controllers/AdminController");

route.get("/", adminController.register);
route.post("/", adminController.register);

module.exports = route;
