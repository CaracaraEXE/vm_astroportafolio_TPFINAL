import { MongoClient } from 'mongodb';

const uri = import.meta.env.MONGODB_URI;

let db;
let client;

export async function getDb(dbName = 'Cluster0') {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  db = client.db(dbName);
  return db;
}