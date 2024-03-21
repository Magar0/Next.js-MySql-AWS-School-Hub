import { createPool } from "mysql2/promise";

const host = process.env.HOST || "127.0.0.1"
const port = process.env.SQL_PORT || 3306
const user = process.env.USER || "root"
const password = process.env.PASSWORD || "root"
const database = process.env.DATABASE

const connectDb = createPool({
    host,
    port,
    user,
    password,
    database
});

export default connectDb;