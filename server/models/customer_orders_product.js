module.exports = (sequelize, DataTypes) => {
  const CostumerOrderProduct = sequelize.define('CostumerOrderProducts', {
    orderId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Contact, {
      foreignKey: 'userId',
      as: 'Contact',
    });
  };
  return User;
};
