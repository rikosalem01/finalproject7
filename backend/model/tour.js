import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Review from "./review.js";

const { DataTypes } = Sequelize;

const Tour = db.define('tour', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        type: DataTypes.STRING,
        required: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxGroupSize: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    freezeTableName: true
});

Tour.hasMany(Review, { foreignKey: 'tourId' });
Review.belongsTo(Tour, { foreignKey: 'tourId' });

export default Tour;