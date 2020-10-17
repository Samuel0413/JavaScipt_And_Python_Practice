const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
const ngrok = require('ngrok');
const twilio = require('twilio');

// Set up our express web application
const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

// Create a route to handle incoming WhatsApp messages
app.post('/whatsapp', (request, response) => {
  console.log(
    `Incoming WhatsApp message from ${request.body.From}: ${request.body.Body}`
  );
  response.type('text/xml');
  response.send(`
    <Response><Message>What's app, doc?</Message></Response>
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
    console.log("Your app, it's ALIVE!");
    console.log(
      'Copy and paste this ngrok URL in the WhatsApp Sandbox configuration:'
    );
    console.log(`${url}/whatsapp`);

    console.log(
      `Send a message to your WhatsApp Sandbox number and check the reply you get back!`
    );
  } catch (e) {
    console.log('There was an error configuring incoming WhatsApp messages:');
    console.log(e);
  }
})();
/* jshint ignore:end */
