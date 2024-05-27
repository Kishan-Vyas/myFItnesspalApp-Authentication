const express = require("express");
const { register, login, allUser } = require("../controllers/auth");
const {
  resetPasswordOTP,
  resetPassword,
} = require("../controllers/resetPassword");
const { verifiEmailOTP, verifiEmail } = require("../controllers/verifiEmail");
const router = express.Router();

//! create new user
router.route("/register").post(register);

//! login new user
router.route("/login").post(login);

//! send OTP and verifi email
router.route("/verifi-email-otp").post(verifiEmailOTP);
router.route("/verifi-email").post(verifiEmail);

//! send OTP and reset password
router.route("/reset-password-otp").post(resetPasswordOTP);
router.route("/reset-password").post(resetPassword);



module.exports = router;
