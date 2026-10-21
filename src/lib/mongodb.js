import { meta } from 'astro:schema';
import { MongoClient } from 'mongodb';

let client;
let db;

export async function getDb(dbName = 'mysite') {
  if (!client) {
    client = new MongoClient(import.meta.env.MONGODB_URI);
    await client.connect();
  }
  db = client.db(dbName);
  return db;
}