import bcrypt from "bcrypt";
import { connectBase } from "../../database/get_database.js";

export default async function signUp(req, res) {
  const data_base = connectBase();
  const users = data_base.collection("users");
  const user_id = req.body.user_id;
  const is_user = await users.findOne({ user_id: user_id });
  if (is_user) {
    res.send("exist");
  } else {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const freinds = [];
    const freind_request = [];
    await users.insertOne({
      user_id: user_id,
      password: hashedPassword,
      freinds: freinds,
      freind_request: freind_request,
      notifications:false
    });
    res.send("done");
  }
}
