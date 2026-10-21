import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://herbertialahue_db_user:<db_password>@cluster0.r7tmmt6.mongodb.net/";

let db;

export async function getDb(dbName = 'mysite') {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  db = client.db(dbName);
  return db;
}