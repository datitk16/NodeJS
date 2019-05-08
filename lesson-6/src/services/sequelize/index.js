import Sequelize from 'sequelize'
import { mysql } from './../../config'
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    dialect: 'mysql'
})
var userModel = sequelize['import']('../../api/user/model');
const db = {
    User: userModel
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;