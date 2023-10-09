"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    class Comments extends sequelize_1.Model {
    }
    Comments.init({
        comment_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        tweet_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
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
        multimedia_id: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Comments',
        timestamps: false,
    });
    return Comments;
};
