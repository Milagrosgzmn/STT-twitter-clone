import { DataTypes, Model, Sequelize } from 'sequelize';

interface FollowersAttribute{
  follower_id: string;
  following_id: string;
}
module.exports = (sequelize : Sequelize)=>{
    class Followers extends Model<FollowersAttribute> implements FollowersAttribute {
        public follower_id!: string;
        public following_id!: string;
    }
    Followers.init(
        {
            follower_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            following_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
        },
        {
        sequelize,
        modelName: 'Followers',
        timestamps: false,
        }
    );
    return Followers;
};