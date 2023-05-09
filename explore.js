const Twilio = require("twilio");

const client = new Twilio(
    "AuthSid",
    "AuthToken"
)

client.messages
    .list()
    .then(messages=>
        console.log(`The most recent message is ${messages[0].body}`)
        );

console.log("Gathering message log");