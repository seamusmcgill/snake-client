const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data.toString());
  });

  conn.on("connect", () => {
    console.log("Successfuly connected to game server");
    conn.write("Name: SSM");
  });

  return conn;
};

module.exports = {
  connect,
};