import { DataTypes, Model, Sequelize } from 'sequelize';
import { Retweet } from '../types/types';

export default (sequelize : Sequelize)=>{
    class Retweets extends Model<Retweet> implements Retweet {
        public retweet_id!: string;
        public user_id!: string;
        public text!: string | null; // preguntar
        public multimedia_id!: string | null;
        public tweet_id!:string;
        public created_at!: Date;
    }
    Retweets.init(
        {
            retweet_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.UUID,
                allowNull: false,
            },
            text:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            multimedia_id:{
                type: DataTypes.UUID,
                allowNull: true,
            },
            tweet_id:{
                type: DataTypes.UUID,
                allowNull: false,
            },
            created_at:{
                type: DataTypes.DATE,
                defaultValue:DataTypes.NOW,
            }
        },
        {
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
        }
    );
    return Retweets;
};