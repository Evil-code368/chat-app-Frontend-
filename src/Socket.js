import { io } from "socket.io-client";

export const socket = io("https://chat-app-frontend-rho-teal.vercel.app/chat", {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});
