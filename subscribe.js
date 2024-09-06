const { clientMqtt } = require("./config/clientMqtt");

clientMqtt.subscribe("my/test/topic");

clientMqtt.on("message", function (topic, message) {
  const messageJson = JSON.parse(message.toString());
  console.log(
    "Received message:",
    topic,
    `GET DATA READING -> ${messageJson.reading}`
  );
});
