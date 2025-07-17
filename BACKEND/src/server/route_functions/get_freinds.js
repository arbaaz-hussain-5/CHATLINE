import { connectBase } from "../../database/get_database.js";

export default async function getFreinds(req, res) {
  if (req.userId !== req.body.user_id) {
    return res.status(401).send("Unauthorized: Invalid Authorization header");
  }
  const data_base = connectBase();
  const users = data_base.collection("users");
  const query = { user_id: req.body.user_id };
  const freinds = await users.findOne(query);
  const ids = freinds?.freinds;
  res.send(ids);
}
