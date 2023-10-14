"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Users extends sequelize_1.Model {
    }
    Users.init({
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_phoneNumber: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        user_country: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        user_profilePic: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'Users',
        timestamps: false,
    });
    return Users;
};
