const mqtt = require("mqtt");
const { options } = require("./constants.js");

const clientMqtt = mqtt.connect(options);

clientMqtt.on("connect", function () {
  console.log("Connected");
});

clientMqtt.on("error", function (error) {
  console.log(error);
});

module.exports = { clientMqtt };
