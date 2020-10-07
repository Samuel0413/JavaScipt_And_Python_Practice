from twilio.rest import Client
import os
# Your Account Sid and Auth Token from twilio.com/console
account_sid = os.environ["account_sid"]
auth_token = os.environ["auth_token"]
client = Client(account_sid, auth_token)

message = client.messages.create(
    from_="whatsapp:+14155238886", # Your Sandbox number
    to="whatsapp:+12895521178", # Your own WhatsApp-enabled number
    body="Here's a picture of lion!",
    media_url="https://images.unsplash.com/photo-1573725342230-178c824a10f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80",
)

print("Message is sent successfully!!")
