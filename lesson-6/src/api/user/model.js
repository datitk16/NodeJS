import bcrypt from 'bcrypt'
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            set: function (val) {
                if (!val) {
                    return
                }
                const hash = bcrypt.hashSync(val, 9)
                this.setDataValue('password', hash)
            }
        },
        role: DataTypes.STRING
      
    })

    // User.associate = function (models) {
    //     models.User.hasMany(models.Product, {
    //         as: 'products',
    //     });
    // };

    return User
}