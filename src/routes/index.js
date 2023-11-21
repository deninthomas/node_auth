const express = require("express");
const router = express.Router();

const userRoutes = require("./../domains/user");

const OTPRoutes = require("./../domains/otp");
const EmailVerificationRoutes = require("./../domains/email_verification");
const ForgotPasswordRoutes = require("./../domains/forgot_password");
const services = require("../services/render");


// get render login page
router.get('/',services.loginRoutes);


// get render signup page
router.get('/signup',services.signupRoutes);

// get render otp verification page
router.get('/signup/otpverification',services.otpVerificationRoutes);

// get render forgot password page
router.get('/resetpassword',services.resetpasswordRoutes);

router.use("/user", userRoutes);
router.use("/otp",OTPRoutes);
router.use("/email_verification",EmailVerificationRoutes);
router.use("/forgot_password", ForgotPasswordRoutes);

module.exports = router;
