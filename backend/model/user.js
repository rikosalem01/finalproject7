import { Sequelize } from "sequelize"
import { toDefaultValue } from "sequelize/types/utils.js"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const User = db.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        toDefaultValue: 'user'
    }
}, {
    freezeTableName: true
})

export default User