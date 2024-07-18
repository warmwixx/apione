// Create the connection pool. The pool-specific settings are the defaults
const mysql = require("mysql2");

export const mysqlPool = mysql.createPool(process.env.DB_URI);
