"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const comments_1 = __importDefault(require("./models/comments"));
const mediosAdjuntos_1 = __importDefault(require("./models/mediosAdjuntos"));
const notifications_1 = __importDefault(require("./models/notifications"));
const retweets_1 = __importDefault(require("./models/retweets"));
const tweets_1 = __importDefault(require("./models/tweets"));
const users_1 = __importDefault(require("./models/users"));
const mediaRelationships_1 = __importDefault(require("./models/mediaRelationships"));
const sequelize_1 = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL } = process.env;
const conection = DB_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
const sequelize = new sequelize_1.Sequelize(`${conection}`, { logging: false, native: false, ssl: true });
(0, comments_1.default)(sequelize);
(0, mediosAdjuntos_1.default)(sequelize);
(0, notifications_1.default)(sequelize);
(0, retweets_1.default)(sequelize);
(0, tweets_1.default)(sequelize);
(0, users_1.default)(sequelize);
(0, mediaRelationships_1.default)(sequelize);
const { Comments, MediaRelationships, Multimedia, Notifications, Retweets, Tweets, Users } = sequelize.models;
Users.hasMany(Tweets);
Tweets.belongsTo(Users, { foreignKey: 'user_id' });
Users.belongsToMany(Users, {
    as: 'followers',
    foreignKey: 'following_id',
    through: 'Followers',
    timestamps: false,
});
Users.belongsToMany(Users, {
    as: 'following',
    foreignKey: 'follower_id',
    through: 'Followers',
    timestamps: false,
});
Users.belongsToMany(Tweets, {
    foreignKey: 'user_id',
    through: 'Likes',
    timestamps: false,
});
Tweets.belongsToMany(Users, {
    foreignKey: 'tweet_id',
    through: 'Likes',
    timestamps: false,
});
Users.belongsToMany(Comments, {
    foreignKey: 'user_id',
    through: 'Likes',
    timestamps: false,
});
Comments.belongsToMany(Users, {
    foreignKey: 'comment_id',
    through: 'Likes',
    timestamps: false,
});
Tweets.hasMany(Comments);
Comments.belongsTo(Tweets, { foreignKey: 'tweet_id' });
Tweets.hasMany(Retweets);
Retweets.belongsTo(Tweets, { foreignKey: 'tweet_id' });
Users.hasMany(Retweets);
Retweets.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Notifications);
Notifications.belongsTo(Users, { foreignKey: 'user_id' });
Multimedia.hasMany(MediaRelationships, { foreignKey: 'multimedia_id' });
MediaRelationships.belongsTo(Multimedia, { foreignKey: 'multimedia_id' });
MediaRelationships.belongsTo(Tweets, { foreignKey: 'parent_id', constraints: false });
MediaRelationships.belongsTo(Comments, { foreignKey: 'parent_id', constraints: false });
MediaRelationships.belongsTo(Users, { foreignKey: 'parent_id', constraints: false });
module.exports = {
    Comments,
    Multimedia,
    Notifications,
    Retweets,
    Tweets,
    Users,
    conn: sequelize,
};
