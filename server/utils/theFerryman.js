const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail =  function (message) {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Sent: " + info.response);
  });
};

const theFerryman = function (user, messageType, customLink) {
  const message = {
    from: process.env.EMAIL_ADDRESS,
    to: user.email,
  };
  switch (messageType) {
    case "password":
      message.subject = "Password Reset Request";
      message.html = `<pre>Hi ${user.name},\n\nForgot your password?\nWe received a request to reset the password for your account.\n\nTo reset your password, click on the link below:\n</pre>https://quizmaker-app.herokuapp.com/newpassword/${customLink}`;
      break;
  }
  sendMail(message);
};

module.exports = theFerryman;

// The Ferryman variables:
// 
// user is an object containing the users name
// Example:
// user = {
//  name: "Jamey Wicklund",
//  email: "noreply@mailmeseeds.com"
// }
// 
// messageType specifies which email template to use
// password - send a reset password link
// request - Infrom a user their seeds were requested
// shipping - Inform a user seeds have shipped
// 
// customLink - unique link for user to follow up with