import mysql from "mysql";



export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bavarias@1",
    database: "crud"
});