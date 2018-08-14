module.exports = (sequelize, DataTypes) => {
  const Supplielrs = sequelize.define('Supplielrs', {
    supplierCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    supplierName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    otherSupplierDetails: {
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
