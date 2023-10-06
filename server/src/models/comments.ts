import { DataTypes, Model, Sequelize } from 'sequelize';

interface CommentAttributes{
  comment_id: string;
  user_id: string;
  tweet_id: string;
  text: string;
  multimedia_id:string | null;
  createdAt: Date;
}
module.exports = (sequelize : Sequelize)=>{
    class Comments extends Model<CommentAttributes> implements CommentAttributes {
        public comment_id!: string;
        public user_id!: string;
        public tweet_id!: string;
        public text!: string;
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
                type: DataTypes.STRING,
                allowNull: false,
            },
            tweet_id:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            text:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            multimedia_id:{
                type: DataTypes.STRING,
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
