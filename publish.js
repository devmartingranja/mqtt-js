const { clientMqtt } = require("./config/clientMqtt.js");

setInterval(() => {
  const reading = Math.random();
  console.log(`SEND PUBLISH -> ${reading}`);
  clientMqtt.publish("my/test/topic", JSON.stringify({ reading }));
}, 4000);
