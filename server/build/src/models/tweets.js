"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Tweets extends sequelize_1.Model {
    }
    Tweets.init({
        tweet_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'user_id',
            }
        },
        multimedia_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
        },
        text: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        likes: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        retweets: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        comments: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            defaultValue: [],
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        sequelize,
        modelName: 'Tweets',
        timestamps: false,
    });
    return Tweets;
};
