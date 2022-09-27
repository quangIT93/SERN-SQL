const express = require("express");

const route = express.Router();

const authController = require("../Controllers/AuthController");

route.get("/", authController.home);
route.get("/signUpPage", authController.signUpPage);
route.get("/signInPage", authController.signInPage);
route.get("/signUp", authController.signIn);
route.get("/signIn", authController.signUp);

module.exports = route;
// route.get('/signup',siteController.signup);
// route.get('/signin',siteController.signin);
// route.get('/log-out',siteController.logOut);
// route.get('/createNewPwd',siteController.createNewPwd);
// route.get('/getDistrict', siteController.getDistrict);
// route.get('/getWard', siteController.getWard);
// route.post('/adminSignUp',siteController.adminSignUp);
// route.post('/userSignUp',siteController.userSignUp);
// route.post('/signin',siteController.doSignIn);
// route.post('/createNewPwd',siteController.doCreateNewPwd);
