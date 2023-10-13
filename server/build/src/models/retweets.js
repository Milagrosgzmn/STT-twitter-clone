"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Retweets extends sequelize_1.Model {
    }
    Retweets.init({
        retweet_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        multimedia_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
        },
        tweet_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        sequelize,
        modelName: 'Retweets',
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['user_id', 'tweet_id'],
                name: 'unique_user_retweet',
            },
        ]
    });
    return Retweets;
};
