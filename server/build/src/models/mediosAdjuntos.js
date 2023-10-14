"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Multimedia extends sequelize_1.Model {
    }
    Multimedia.init({
        multimedia_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        multimedia_url: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        multimedia_type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        public_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Multimedia',
        timestamps: false,
    });
    return Multimedia;
};
