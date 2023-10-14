import { DataTypes, Model, Sequelize } from 'sequelize';
import { Comment } from '../types/types';

export default (sequelize : Sequelize)=>{
    class Comments extends Model<Comment> implements Comment {
        public comment_id!: string;
        public user_id!: string;
        public tweet_id!: string;
        public text!: string;
        public likes!: number | null;
        public retweets!: number | null;
        public multimedia_id!: string | null;
        public createdAt!: Date;
    }
    Comments.init(
        {
            comment_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.UUID,
                allowNull: false,
            },
            tweet_id:{
                type: DataTypes.UUID,
                allowNull: false,
            },
            text:{
                type: DataTypes.STRING,
                allowNull: false,
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
            multimedia_id:{
                type: DataTypes.UUID,
                allowNull: true,
            },
            createdAt:{
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            }
        },
        {
        sequelize,
        modelName: 'Comments',
        timestamps: false,
        }
    );
    return Comments;
};
