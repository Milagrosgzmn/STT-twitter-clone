import { DataTypes, Model, Sequelize } from 'sequelize';

interface LikesAttributes{
    tweet_id: string;
    user_id: string;
  }
  module.exports = (sequelize : Sequelize)=>{
      class Likes extends Model<LikesAttributes> implements LikesAttributes {
          public tweet_id!: string;
          public user_id!: string;
      }
      Likes.init(
          {
              tweet_id: {
                  type: DataTypes.STRING,
                  primaryKey: true,
                  allowNull: false,
              },
              user_id: {
                  type: DataTypes.STRING,
                  primaryKey: true,
                  allowNull: false,
              },
          },
          {
          sequelize,
          modelName: 'Likes',
          timestamps: false,
          }
      );
      return Likes;
  };