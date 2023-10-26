import { DataTypes,Model, Sequelize } from 'sequelize';
import { User } from '../types/types';

export default (sequelize : Sequelize)=>{
    class Users extends Model<User> implements User {
        public user_id!: string;
        public user_username!: string;
        public user_firstName!: string;
        public user_lastName!: string;
        public user_email!: string;
        public user_password!: string;
        public user_country!: string | null;
        public user_profilePic!: string | null;
        public user_phoneNumber!: number;
    }
    Users.init(
        {
            user_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            user_username:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true,
            },
            user_firstName:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            user_lastName:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            user_email:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true,
            },
            user_password:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            user_phoneNumber:{
                type:DataTypes.INTEGER,
                allowNull:false,
                unique:true,
            },
            user_country:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            user_profilePic:{
                type:DataTypes.STRING,
                allowNull:true,
            }
        },
        {
        sequelize,
        modelName: 'Users',
        timestamps: false,
        }
    );
    return Users;
};