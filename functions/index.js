const functions = require('firebase-functions');
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);

const rq = require('request');
// const rqPromise = require('request-promise');
const http = require('http');
const cors = require("cors")({ origin: true });


// // CALLABLE: Listen for modification of any `users` document.
exports.sendContactEmail = functions.https.onCall((data, context) => {
    const email = data.email;
    const actionCodeSettings = data.actionCodeSettings;
    // const uid = context;
    console.log('~~~~~~sending email login link', data);
    // ///////////////// Customize SignIn Template
    return sendEmail('d-6b07eabf10da4ec38b53fbbebc3f4860', data)
      .then((response) => {
        console.log(response);
        return true;
        })
      .catch((error) => {
        // Some error occurred.
        console.log('send email error', error);
        return error
      });
});

const sendEmail = async(templateID, data) => {
  const msg = {
      // to: data.email,
      to: 'adamelevate@gmail.com',
      from: 'adamelevate@gmail.com',
      name: 'Adam Lorentzen',
      // subject:  'New Follower',
      // text: `Hey ${toName}. You have a new follower!!! `,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

      // custom templates
      templateId: templateID,
      // and other custom properties here
      dynamic_template_data: data,
    };
  let email = sgMail.send(msg)
  .then((msg) => {
    console.log('Email sent to:', data.email);
      return `Email sent to: ${data.email}`;
  }).catch( error =>{
      console.log(error);
      return error;
  })
  return email;
};
