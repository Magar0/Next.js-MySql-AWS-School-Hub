import { createConnection } from "mysql2/promise";

const connectDb = createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "assignments"
});

export default connectDb;