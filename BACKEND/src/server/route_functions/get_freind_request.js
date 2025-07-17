import { connectBase } from "../../database/get_database.js";

export default async function getFreindRequest(req, res) {
  if (req.userId !== req.body.user_id) {
    return res.status(401).send("Unauthorized: Invalid Authorization header");
  }
  const data_base = connectBase();
  const users = data_base.collection("users");
  const rq_user = req.body.user_id;
  try {
    const data = (await users.findOne({ user_id: rq_user })).freind_request;
    await users.updateOne(
      { user_id: rq_user },
      {
        $set: {
          notifications: false,
        },
      }
    );
    res.send(data);
  } catch {
    res.send("notfound");
  }
}
