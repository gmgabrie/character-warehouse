const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (email, username) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PW,
      },
    });

    await transporter.sendMail({
      from: '"Character Warehouse 👻" <admin@characterwarehouse.com>', // sender address
      to: email, // list of receivers
      subject: "Account Registration Confirmation", // Subject line
      text:
        username +
        " - you have successfully registered for an account with Character Warehouse.", // plain text body
      html:
        username +
        " - You have successfully registered for an account with Character Warehouse.", // html body
    });
    console.log("Message sent to " + email);
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
