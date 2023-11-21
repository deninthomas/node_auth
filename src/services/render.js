
// render login page
exports.loginRoutes = (req,res) => {
    res.render('login');
}

// render signup page
exports.signupRoutes = (req,res) => {
    res.render('signup');
}

// render otpverification page
exports.otpVerificationRoutes = (req,res) => {
    res.render('otpverification');
}

// render forgot passsword page
exports.resetpasswordRoutes = (req,res) => {
    res.render('forgotpaswd');
}
