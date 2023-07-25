import mysql from "mysql";
import * as dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATA_BASE_DB,
});