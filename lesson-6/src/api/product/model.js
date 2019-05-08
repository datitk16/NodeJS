module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        cover: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    })

    // Product.associate = function (models) {
    //     models.Product.belongsTo(models.User, {
    //         as: 'createdBy'
    //     });
    // };

    return Product
}