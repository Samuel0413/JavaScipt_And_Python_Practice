const twilio = require('twilio');

// Create authenticated API client as before
const client = twilio(
  process.env.TQ_TWILIO_ACCOUNT_SID,
  process.env.TQ_TWILIO_AUTH_TOKEN
);

// You'll be filling out some of the parameters yourself below.
// Take a look at the "from" parameter format and fill out the "to", 
// "mediaUrl" and "body" parameters. The "mediaUrl" parameter must be a 
// fully qualified URL to an image/some media you want to send
// with your message
client.messages
  .create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+12895521178',
    body: 'Matrix lecture',
    mediaUrl: 'https://www.math.tamu.edu/~dallen/m640_03c/lectures/chapter6.pdf',
  })
  .then(message => {
    console.log('Message is sent successfully!!');
  })
  .catch(error => {
    console.error('Looks like the Twilio API returned an error:');
    console.error(error);
  });
