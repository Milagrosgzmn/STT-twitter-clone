import { DataTypes, Model, Sequelize } from 'sequelize';

interface mediaRelationships{
  multimedia_id: string;
  parent_id:string;
}
module.exports = (sequelize : Sequelize)=>{
    class MediaRelationships extends Model<mediaRelationships> implements mediaRelationships {
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