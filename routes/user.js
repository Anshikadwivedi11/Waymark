const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const flash = require("connect-flash");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// Controllers
const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get(userController.renderSignupForm)     // rendering signup form
    .post(wrapAsync(userController.signup));  // SignUp


router
    .route("/login")
    .get(userController.renderLoginForm)   // rendering login form
    .post(     //Login
    saveRedirectUrl,
    passport.authenticate('local', {    //actual login check is done by passport authenticate
        failureRedirect: '/login', 
        failureFlash: true 
    }),
    userController.login  //functionality after successfull login
    )

    
// Logout
router.get("/logout", userController.logout);

module.exports = router;
