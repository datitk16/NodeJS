import Sequelize from 'sequelize'
import { mysql } from './../../config'
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    dialect: 'mysql'
})
var userModel = sequelize['import']('../../api/user/model');
var productModel = sequelize['import']('../../api/product/model');
const db = {
    User: userModel,
    Product:productModel
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;