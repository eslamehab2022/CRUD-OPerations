import { DataTypes } from "sequelize";
import { sequlize } from "../connection.js";


export const proudactModel = sequlize.define('proudact', {
    
    titel: {
        type: DataTypes.STRING(150),
        allowNull:false
    },
    descration: {
        type: DataTypes.STRING(200),
        allowNull:false
    },
    moudel: {
        type: DataTypes.FLOAT,
        allowNull:false
    }



});
export default proudactModel;