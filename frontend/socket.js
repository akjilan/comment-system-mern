import { io } from "socket.io-client";

const SOCKET_URL = "https://comment-system-mern.onrender.com";
// const SOCKET_URL = import.meta.env.VITE_API_BASE_URL;

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});
