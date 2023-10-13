import { DataTypes, Model, Sequelize } from 'sequelize';
import { Tweet } from '../types/types';

export default (sequelize : Sequelize)=>{
    class Tweets extends Model<Tweet> implements Tweet {
        public tweet_id!: string;
        public user_id!: string;
        public text!: string | null;
        public multimedia_id!: string | null;
        public likes!: number | null;
        public retweets!: number | null;
        public comments!: string[] | null;
        public created_at!: Date;
    }
    Tweets.init(
        {
            tweet_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.UUID,
                allowNull: false,
                references:{
                    model: 'Users',
                    key: 'user_id',
                }
            },
            multimedia_id:{
                type: DataTypes.UUID,
                allowNull: true,
            },
            text:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            likes:{
                type: DataTypes.INTEGER,
                allowNull: false, //volver a definir el trigger
                defaultValue: 0,
            },
            retweets:{
                type: DataTypes.INTEGER,
                allowNull: false, //volver a definir el trigger
                defaultValue: 0,
            },
            comments:{
                type: DataTypes.ARRAY(DataTypes.STRING),
                defaultValue: [],
            },
            created_at:{
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        },
        {
        sequelize,
        modelName: 'Tweets',
        timestamps: false,
        }
    );
    return Tweets;
};