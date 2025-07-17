import { connectBase } from "../../database/get_database.js";

export default async function search(req, res) {
  console.log("current user:" + req.userId)
  if (req.userId !== req.body.user_id) {
    return res.status(401).send("Unauthorized: Invalid Authorization header");
  }
  const data_base = connectBase();
  const users = data_base.collection("users");
  const reg = req.body.reg;
  let regex = new RegExp("^" + reg, "i");
  users
    .find({ user_id: regex })
    .toArray()
    .then((data) => {
      res.send(data);
    });
}
