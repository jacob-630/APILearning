const Twilio = require("twilio");

const client = new Twilio(
    "ACa6d1b77d69ba2bdd0b326a065465b1cf",
    "e4686f696955d77b9e6499ba9d10c40c"
)

client.messages
    .list()
    .then(messages=>
        console.log(`The most recent message is ${messages[0].body}`)
        );

console.log("Gathering message log");