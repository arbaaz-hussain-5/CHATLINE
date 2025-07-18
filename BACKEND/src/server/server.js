import { createServer } from "node:http";
import express from "express";
import cors from "cors";
import verifyToken from "../authentication/auth.js";
import cookieParser from "cookie-parser";
import signUp from "./route_functions/signup.js";
import login from "./route_functions/login.js";
import getFreinds from "./route_functions/get_freinds.js";
import search from "./route_functions/search.js";
import freindRequest from "./route_functions/freind_request.js";
import removeFreindRequest from "./route_functions/remove_freind_request.js";
import getFreindRequest from "./route_functions/get_freind_request.js";
import getProfile from "./route_functions/get_profile.js";
import addFreind from "./route_functions/add_freind.js";
import removeFreind from "./route_functions/remove_freind.js";
import socketServer from "./socket_server/socket_server.js";
import isNotification from "./route_functions/get_is_notification.js";

export default function runServer() {
  const app = express();
  const server = createServer(app);
  const port = process.env.PORT;

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
  app.post("/signup", signUp);
  app.post("/login", login);
  app.use(verifyToken);
  app.post("/getfreinds", getFreinds);
  app.post("/search", search);
  app.post("/freind_request", freindRequest);
  app.post("/remove_freind_request", removeFreindRequest);
  app.post("/get_freind_request", getFreindRequest);
  app.post("/get_profile", getProfile);
  app.post("/addfreind", addFreind);
  app.post("/removefreind", removeFreind);
   app.post("/notfication_status", isNotification);


  socketServer(server)
  
  server.listen(port, () => {
    console.log(`server app listening on port ${port}`);
  });
}
