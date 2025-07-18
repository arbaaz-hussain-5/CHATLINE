import { Server } from "socket.io";
import { connectBase } from "../../database/get_database.js";
export default function socketServer(server) {
  const io_server = new Server(server, {
    cors: {
      origin: "*",
      methods: "*",
    },
  });
  const online_users = new Map();
  io_server.on("connection", async (user_socket) => {
    const data_base = connectBase();
    const users = data_base.collection("users");
    const user_id = user_socket.handshake.headers.user_id;
    online_users.set(user_id, user_socket);
    const freinds = (await users.findOne({ user_id: user_id }))?.freinds;
    const fdata = [];
    console.log("freinds: " + freinds);

    for (let i = 0; i < freinds?.length; i++) {
      const d = freinds[i];
      if (Array.from(online_users.keys()).includes(d)) {
        fdata.push(d);
      }
    }
    console.log("fdata" + fdata);
    fdata.forEach((auser_id) => {
      if (auser_id != null && user_id != null) {
        online_users.get(user_id)?.emit("online_update", "add", auser_id);
        online_users.get(auser_id)?.emit("online_update", "add", user_id);
      }
    });

    Array.from(online_users.keys()).forEach((auser_id) => {
      if (auser_id != null && user_id != null) {
        online_users
          .get(auser_id)
          .emit("current_online_users", Array.from(online_users.keys()));
      }
    });
    console.log(`${user_id} is connected to server`);
    console.log("online users: " + Array.from(online_users.keys()));
    user_socket.on("disconnect", () => {
      online_users.delete(user_id);
      Array.from(online_users.keys()).forEach((auser_id) => {
        if (auser_id != null && user_id !== null) {
          online_users
            .get(auser_id)
            .emit("current_online_users", Array.from(online_users.keys()));
        }
      });

      fdata.forEach((auser_id) => {
        if (auser_id != null && user_id != null) {
          online_users.get(auser_id)?.emit("online_update", "remove", user_id);
        }
      });
      console.log(user_id + " is disconnected");
      console.log("online users: " + Array.from(online_users.keys()));
    });
    user_socket.on("send_message", async (message, reciever_id) => {
      console.log(message + " to " + reciever_id);
      const data = { message: message, sender: user_id, receiver: reciever_id };
      if (online_users.has(reciever_id)) {
        online_users.get(reciever_id).emit("recieve_message", message, user_id);
      }
    });
  });
}
