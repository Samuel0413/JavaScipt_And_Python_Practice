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
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );
  response.type('text/xml');
  // TODO
  // Edit the TwiML here to send a Message in response to the incoming SMS
  // Make sure to specify the `action` attribute on the <Message> tag! There's
  // another route below this one you'll need to configure to receive status
  // updates and print out the data Twilio sends you. You can use relative
  // paths for the action attribute, such as /status
  response.send(`
    <Response>
      <Message action="/status">
        If you didn't edit this TwiML, you won't see status callbacks!
      </Message>
    </Response>
  `);
});

// Create a route to handle the status update
app.post('/status', request => {
  console.log('Status update received');
  // TODO
  // This is your status callback handler URL. When you receive a status 
  // update, Twilio sends information about the message status as POST 
  // parameters. Uncomment the lines below to print out the information you
  // need to complete this challenge:

  console.log('Message status: ', request.body.MessageStatus);
  console.log('Message SID: ', request.body.MessageSid);
  //console.log('Did you uncomment the log statements above me?');
});

// Use a tunneling tool like ngrok to give your server a public URL!
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

