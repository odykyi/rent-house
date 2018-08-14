module.exports = (sequelize, DataTypes) => {
  const CostumersOrder = sequelize.define('CostumersOrders', {
    orderId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    customerPaymentMethodId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderStatusCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    dateOrderPlaced: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOrderPaid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    derTotalOrderPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otherOrderDetails: {
      type: DataTypes.STRING,
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
