import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pgClient = new Client({
    connectionString : process.env.DATABASE_URL
});

//another way
// export const pgClient = new Client({
//     user : process.env.PG_USER,
//     password : process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//     host : process.env.PG_HOST,
//     database : process.env.PG_DATABASE,
//     ssl : process.env.PG_SSL

// })

