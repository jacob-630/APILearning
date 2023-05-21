from twilio.rest import Client

client = Client(
                "ACa6d1b77d69ba2bdd0b326a065465b1cf", 
                "6dc6b1eefaa6f29a409565228bedf390"
)

for msg in client.messages.list():
    print(f"deleting: {msg.body}")
    msg.delete()

# msg = client.messages.create(
#     to="+17059237728",
#     from_="+12705618758",
#     body="sent from Python!",
# )

# print(f"Created a new message: {msg.sid}")