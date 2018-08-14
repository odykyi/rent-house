module.exports = (sequelize, DataTypes) => {
  const CostumerAddress = sequelize.define('CostumerAddresses', {
    costumerId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    dateFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressTypeCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    dateTo: {
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
