import { DataTypes, Model, Sequelize } from 'sequelize';
import { Notification } from '../types/types';

export default (sequelize : Sequelize)=>{
    class Notifications extends Model<Notification> implements Notification {
        public notification_id!: string;
        public notification_type!: string;
        public user_id!: string;
        public related_id!: string;
        public is_read!: boolean | null;
    }
    Notifications.init(
        {
            notification_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            notification_type:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            user_id:{
                type: DataTypes.UUID,
                allowNull:false,
            },
            related_id:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            is_read:{
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull:true,
            },
        },
        {
        sequelize,
        modelName: 'Notifications',
        timestamps: false,
        indexes: [
            {
              unique: true,
              fields: ['related_id', 'notification_type'],
              name: 'unique_type_notif',
            },
        ]
        }
    );
    return Notifications;
};