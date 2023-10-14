"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class MediaRelationships extends sequelize_1.Model {
    }
    MediaRelationships.init({
        multimedia_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        parent_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'MediaRelationships',
        timestamps: false,
    });
    return MediaRelationships;
};
