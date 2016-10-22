import io from "socket.io-client";
import config from "../config/app.js";

const USER_ID = 1;

const opts = {
  forceNew: true,
  query: 'userId=' + USER_ID
};

let socket = null;

export default (store) => {

  if(config.realtimeServerAddress == null) {
    return;
  }
  //ELSE:
  socket = io(config.realtimeServerAddress, opts);

  socket.on("connect", () => {
    console.log("Connected to realtime server");
  });

  socket.on("message", (message) => {
  });

  socket.on("disconnect", () => {
    console.log("Connection was closed");
  })
}

export let middleware = store => next => action => {
}
