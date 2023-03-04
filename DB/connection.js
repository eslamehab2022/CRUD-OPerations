import { Sequelize } from "sequelize";
 export const sequlize = new Sequelize('final', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
const connection = async () => {
    return await sequlize.sync({alter:false}).then(date => {
     //   console.log(date);
        console.log(`DB connection established `);
    }).catch(err => {
        console.log(`error  connection ${err}`)
    })
};


export default connection;