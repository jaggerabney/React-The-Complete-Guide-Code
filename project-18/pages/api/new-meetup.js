import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Reached!");

    const data = req.body;

    const client = await MongoClient.connect(process.env.CONNECTION_STRING);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
