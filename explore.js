const Twilio = require("twilio");

const client = new Twilio(
    "ACa6d1b77d69ba2bdd0b326a065465b1cf",
    "751c540ed780b1ec44733cb7f770600e"
)

client.messages
    .list()
    .then(messages=>
        console.log(`The most recent message is ${messages[0].body}`)
        ).catch(err = console.error(err));

console.log("Gathering message log");