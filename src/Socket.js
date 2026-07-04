import { io } from "socket.io-client";

export const socket = io("https://chat-app-backend-api-ok19.onrender.com", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});
