import { MongoClient } from "mongodb"

const url = `mongodb://localhost:27017`;
const connection = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
    try {
      await connection.connect();
    } catch (error) {
      console.log("MongoDB", error)
    }
})();

const db = connection.db("db_toko");
export default db;