import { DataTypes, Model, Sequelize } from 'sequelize';

interface userAttributes{
  user_id: string;
  user_username: string;
  user_firstName: string;
  user_lastName: string;
  user_email: string;
  user_country: string | null;
  user_phoneNumber: number;
  followers: string[] | null;
  following: string[] | null;
}
module.exports = (sequelize : Sequelize)=>{
    class Users extends Model<userAttributes> implements userAttributes {
        public user_id!: string;
        public user_username!: string;
        public user_firstName!: string;
        public user_lastName!: string;
        public user_email!: string;
        public user_country!: string;
        public user_phoneNumber!: number;
        public followers!: string[] | null;
        public following!: string[] | null;
        
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
            },
            user_phoneNumber:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            user_country:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            followers:{
                type:DataTypes.ARRAY(DataTypes.STRING),
                defaultValue:[],
                allowNull:true,
            },
            following:{
                type:DataTypes.ARRAY(DataTypes.STRING),
                defaultValue:[],
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