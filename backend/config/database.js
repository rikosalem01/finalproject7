import { Sequelize } from "sequelize";

const db = new Sequelize("web-travel", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db;
