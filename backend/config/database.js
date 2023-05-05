import { Sequelize } from "sequelize"

const db = new Sequelize("web-travel", "root", "", {
    host: "localhost",
    port: 3307,
    dialect: "mysql"
})

export default db