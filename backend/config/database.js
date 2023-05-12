import { Sequelize } from "sequelize";

const db = new Sequelize("web-travel", "root", "palopo2016", {
    host: "localhost",
    port:3307,
    dialect: "mysql"
})

export default db;
