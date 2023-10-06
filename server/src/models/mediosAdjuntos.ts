import { DataTypes, Model, Sequelize } from 'sequelize';

interface MultimediaAttributes{
  multimedia_id: string;
  multimedia_url: string;   
  public_id: string;
  multimedia_type: string;
}
module.exports = (sequelize : Sequelize)=>{
    class Multimedia extends Model<MultimediaAttributes> implements MultimediaAttributes {
        public multimedia_id!: string;
        public multimedia_url!: string;
        public public_id!: string;
        public multimedia_type!: string;
        
    }
    Multimedia.init(
        {
            multimedia_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            multimedia_url:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            multimedia_type:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            public_id:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
        sequelize,
        modelName: 'Multimedia',
        timestamps: false,
        }
    );
    return Multimedia;
};