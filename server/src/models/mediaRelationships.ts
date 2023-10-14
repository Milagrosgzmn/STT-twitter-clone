import { DataTypes, Model, Sequelize } from 'sequelize';
import { Media } from '../types/types';

export default (sequelize : Sequelize)=>{
    class MediaRelationships extends Model<Media> implements Media {
        public multimedia_id!: string;
        public parent_id!:string;
        
    }
    MediaRelationships.init(
        {
            multimedia_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
           parent_id:{
                type:DataTypes.STRING,
                allowNull: false,
           }
        },
        {
        sequelize,
        modelName: 'MediaRelationships',
        timestamps: false,
        }
    );
    return MediaRelationships;
};