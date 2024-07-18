// Create the connection pool. The pool-specific settings are the defaults
const mysql = require("mysql2");

export const mysqlPool = mysql.createPool("mysql://jvgJDNQJwWeQESM.root:agL3HiFwCfMVg8lF@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/postdb?ssl={"rejectUnauthorized":true}");
