const { conn, sql } = require("../database/config");

module.exports = {
  all: async (tblName) => {
    try {
      const pool = await conn;
      const sqlString = `SELECT * FROM ${tblName}`;
      let database = await pool.request().query(sqlString);
      return await database.recordset;
    } catch (error) {
      res.status(500).json({ err: "loi roi" });
    }
  },
  get: async (value, tblName, fieldName) => {
    try {
      const pool = await conn;
      const sqlString = `SELECT * FROM ${tblName} WHERE ${fieldName} = '${value}'`;
      let database = await pool.request().query(sqlString);
      return await database.recordset;
    } catch (error) {
      res.status(500).json({ err: "loi roi" });
    }
  },
  getN: async (value, tblName, fieldName) => {
    const sqlString = `SELECT * FROM "${tblName}" WHERE "${fieldName}"='${value}'`;

    try {
      const pool = await conn;
      let database = await pool.request().query(sqlString);
      if (database.recordset > 0) {
        return await database.recordset;
      }
      return null;
    } catch (error) {
      console.log("error siteM/getN:", error);
    }
  },
  add: async (value, tblName) => {
    try {
      const { username, password } = value;
      console.log("username", username);
      console.log("password", password);
      const pool = await conn;
      const sqlString = `INSERT INTO ${tblName}
        VALUES ('${username}', '${password}')`;
      let database = await pool.request().query(sqlString);
    } catch (error) {
      res.status(500).json({ err: "loi roi" });
    }
  },
  update: async (tbName, fieldName, entity) => {
    const table = new pgp.helpers.TableName({
      table: tbName,
      schema: schema,
    });
    const condition = pgp.as.format(
      ` WHERE "${fieldName}" = '${entity[fieldName]}'`,
      table
    );
    const qStr = pgp.helpers.update(entity, null, table) + condition;

    try {
      console.log("Update query: ", qStr);
      const res = await db.one(qStr);
    } catch (error) {
      console.log("error db/update", error);
    }
  },
  ///////////////////////////////////////////////////////////////
  delete: async (tbName, fieldName, val) => {
    const table = new pgp.helpers.TableName({
      table: tbName,
      schema: schema,
    });
    const qStr = pgp.as.format(
      `DELETE FROM $1 WHERE "${fieldName}"='${val}'`,
      table
    );
    try {
      const res = await db.any(qStr);
      return res;
    } catch (error) {
      console.log("error db/delete", error);
    }
  },
};
