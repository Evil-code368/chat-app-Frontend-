import { io } from "socket.io-client";

export const socket = io("https://api.chatlove.pro", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});
