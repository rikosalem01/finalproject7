import { Sequelize } from "sequelize"

const db = new Sequelize("web-travel", "root", "palopo2016", {
    host: "localhost",
    dialect: "mysql"
})

export default db