// Here, we load Twilio's helper library for Node.js
const twilio = require('twilio');

// Next we create an authenticated API client with the account credentials
// you configured earlier. TwilioQuest makes these configuration properties
// available as system environment variables in your code
const client = twilio(
  process.env.TQ_TWILIO_ACCOUNT_SID,
  process.env.TQ_TWILIO_AUTH_TOKEN
);

// Here, we use our authenticated API client to make a request to the Twilio
// REST API. Substitute your own mobile number and message body below
// what happens when you press play!
client.messages
  .create({
    from: 'whatsapp:+14155238886',
    // Replace the parameters below with your real phone number and a different body
    to: 'whatsapp:+12895521178',
    body: 'Your driving test appointment is coming up on 2:00pm.',
  })
  .then(message => {
    console.log(
      'Signed, sealed, and delivered! Copy this SID and enter it to the right:'
    );
    console.log(`${message.sid}`);
  })
  .catch(error => {
    console.error('Looks like the Twilio API returned an error:');
    console.error(error);
  });

