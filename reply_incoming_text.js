const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
const ngrok = require('ngrok');
const twilio = require('twilio');

// Set up our express web application
const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
// This is where the magic happens!
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );
  response.type('text/xml');
  response.send(`
    <Response><Message>TwilioQuest rules</Message></Response>
  `);
});

// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Express server listening on localhost:${PORT}`)
);

// -----------------------------------------------------------------------------
// This code sets up a tool called ngrok to let Twilio talk to the app running
// on your computer. It then uses the Twilio REST API to direct all incoming
// SMS messages to your local app. You should not have to edit any of this
// code below.
// -----------------------------------------------------------------------------

/* jshint ignore:start */
(async function() {
  try {
    await ngrok.disconnect();
    await ngrok.kill();
    let url = await ngrok.connect(PORT);
    console.log('ngrok forwarding configured - your app is live at ', url);

    let client = twilio(
      process.env.TQ_TWILIO_ACCOUNT_SID,
      process.env.TQ_TWILIO_AUTH_TOKEN
    );
    let ngrokUrl = `${url}/sms`;
    let number = await client
      .incomingPhoneNumbers(process.env.TQ_TWILIO_NUMBER_SID)
      .update({
        smsUrl: ngrokUrl,
        smsMethod: 'POST',
      });
    console.log(
      `${number.phoneNumber} configured to send incoming SMS to ${ngrokUrl}`
    );
    console.log(
      `Send a message to ${
        number.phoneNumber
      } and check the reply you get back!`
    );
  } catch (e) {
    console.log('There was an error configuring incoming SMS:');
    console.log(e);
  }
})();
/* jshint ignore:end */
