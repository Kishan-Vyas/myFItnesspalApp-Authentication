const { User } = require("../db/db");
const { sendMailWithOtp, OTP } = require("./OTPmailSend");

//!send verification email otp on register
async function verifiEmailOTP(req, res) {
  const { email } = req.body;
  await sendMailWithOtp(email, "MyFitnessPal New User Verifaction");
  res.json({ message: "verification Mail sended.." });
}

//! verifi email of register
async function verifiEmail (req, res) {
  const { otp, email } = req.body;

  if (otp == OTP) {
    await User.updateOne({ email: email }, { isVerified: true });
    res.json({ message: "user verified" });
  } else {
    res.json({ message: "wrong otp" });
  }
}

module.exports = {verifiEmail, verifiEmailOTP}
