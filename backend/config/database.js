import { Sequelize } from "sequelize";

const db = new Sequelize("web-travel", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
