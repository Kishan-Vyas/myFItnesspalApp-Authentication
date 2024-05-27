const { User } = require("../db/db");
const { sendMailWithOtp, OTP } = require("./OTPmailSend");
const bcrypt = require("bcryptjs")

//! send reset password otp
async function resetPasswordOTP(req, res) {
  const { email } = req.body;
  await sendMailWithOtp(email, "Reset Your password to MyFitanesspal");
  res.json({ message: "Mail sended.." });
}

//! reset password
async function resetPassword (req, res)  {
  const { otp, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  if (otp == OTP) {
    await User.updateOne({ email: email }, { password: hashedPassword });

    res.json({ message: "password updated" });
  } else {
    res.json({ message: "wrong otp" });
  }
}

module.exports = {
    resetPasswordOTP, resetPassword
}
