const sql = require("mssql");

// //later, when you need the connection you make the Promise resolve
const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PWD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  synchronize: true,
  trustServerCertificate: true,
};
const conn = new sql.ConnectionPool(config).connect();

module.exports = { conn, sql };
