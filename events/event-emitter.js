const EventEmitter = require("events");

const custom_emitter = new EventEmitter();

custom_emitter.on("response", (name, id) => {
  console.log(`Data Received: { id: ${id} name: ${name} }`);
});

custom_emitter.on("response", () => {
  console.log(`Some other logic here`);
});

custom_emitter.emit("response", "john", 34);
