require('dotenv').config();
import commentsModel from './models/comments';
import mediosAdjuntosModel from './models/mediosAdjuntos';
import notificationsModel from './models/notifications';
import retweetsModel from './models/retweets';
import tweetsModel from './models/tweets';
import usersModel from './models/users';
import MediaRelationshipsModel from './models/mediaRelationships';
import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL } = process.env;

const conection = DB_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const sequelize = new Sequelize(`${conection}`,
   { logging: false, native: false, ssl:true }
);
commentsModel(sequelize);
mediosAdjuntosModel(sequelize);
notificationsModel(sequelize);
retweetsModel(sequelize);
tweetsModel(sequelize);
usersModel(sequelize);
MediaRelationshipsModel(sequelize);

const {Comments, MediaRelationships, Multimedia, Notifications, Retweets, Tweets, Users} = sequelize.models;

Users.hasMany(Tweets)
Tweets.belongsTo(Users,{foreignKey:'user_id'});
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
  Comments.belongsTo(Tweets, {foreignKey:'tweet_id'});

  Tweets.hasMany(Retweets);
  Retweets.belongsTo(Tweets, {foreignKey:'tweet_id'});

  Users.hasMany(Retweets);
  Retweets.belongsTo(Users, {foreignKey:'user_id'});

  Users.hasMany(Notifications);
  Notifications.belongsTo(Users, {foreignKey:'user_id'});
  

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
