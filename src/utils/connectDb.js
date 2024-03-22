import { createPool } from "mysql2/promise";

const host = process.env.NEXT_PUBLIC_DB_HOST || "127.0.0.1"
const port = process.env.NEXT_PUBLIC_SQL_PORT || 3306
const user = process.env.NEXT_PUBLIC_DB_USER || "root"
const password = process.env.NEXT_PUBLIC_DB_PASSWORD || "root"
const database = process.env.NEXT_PUBLIC_DATABASE

const connectDb = createPool({
    host,
    port,
    user,
    password,
    database
});

export default connectDb;
