const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  if (data === "SIGINT") {
    process.exit();
  }
};

module.exports = {
  setupInput,
};
 