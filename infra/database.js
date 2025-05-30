import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,

    // host: "localhost",
    // port: 5432,
    // user: "postgres",
    // database: "postgres",
    // password: "local_password",

    //     POSTGRES_HOST=localhost
    // POSTGRES_PORT=5432
    // POSTGRES_PORT=postgres
    // POSTGRES_DATABASE=postgres
    // POSTGRESS_PASSWORD=local_password
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
