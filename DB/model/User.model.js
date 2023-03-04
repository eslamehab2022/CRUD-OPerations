import { DataTypes } from "sequelize";
import { sequlize } from "../connection.js";
import proudactModel from "./Proudact.model.js";


const userModel = sequlize.define('user', {
    
    userName: {
        type: DataTypes.STRING(200),
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(150),
        allowNull:false
    },
});


userModel.hasMany(proudactModel, {
    onDelete:'CASCADE',
    onUpdate:'CASCADE'

})
proudactModel.belongsTo(userModel)

export default userModel;