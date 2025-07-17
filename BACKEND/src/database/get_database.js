import { MongoClient } from "mongodb";
function connectBase() {
  return (new MongoClient(process.env.DATABASE_URI)).db("CHAT-BASE");
}
export { connectBase };