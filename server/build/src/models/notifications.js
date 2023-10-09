"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Notifications extends sequelize_1.Model {
    }
    Notifications.init({
        notification_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        notification_type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        related_id: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        is_read: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Notifications',
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['related_id', 'notification_type'],
                name: 'unique_type_notif',
            },
        ]
    });
    return Notifications;
};
