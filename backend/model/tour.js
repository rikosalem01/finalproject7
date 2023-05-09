import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Tour = db.define("tour", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
      distance: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    maxGroupSize:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    featured:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},{
    freezeTableName: true
})

export default Tour