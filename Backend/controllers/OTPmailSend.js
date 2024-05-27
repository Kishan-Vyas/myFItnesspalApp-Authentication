const nodemailer = require("nodemailer");

// https://ethereal.email/
// add transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "reba66@ethereal.email",
    pass: "7bJV27jgmyCcr3z5KF",
  },
});

let OTP = "";

//! to generate random OTP
function generateOTP() {
  OTP = "";
  for (let i = 0; i < 4; i++) {
    const randonNum = Math.floor(Math.random() * 10);
    OTP += randonNum;
  }
  setTimeout(() => {
    OTP = "";
  }, 120000);
}

//! use to send mail
async function sendMailWithOtp(email, subject) {
  generateOTP();
  const mailOptions = {
    from: '"Kishan Vyas" <vyaskishan125@gmail.com>', // Replace with your sender email
    to: email,
    subject: subject,
    text: "", // Plain text content
    html: `<h1>${subject}</h1><p>here is your otp ${OTP}</p>`, // HTML content (optional)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}


module.exports = {
    sendMailWithOtp, OTP
}
