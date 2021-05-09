import io from "socket.io-client";
let STRAPI_ENDPOINT = "http://localhost:1337";

if (process.env.NODE_ENV === "production" && process.env.REACT_APP_SERVER_URL)
  STRAPI_ENDPOINT = process.env.REACT_APP_SERVER_URL;

export const socket = io(STRAPI_ENDPOINT);
