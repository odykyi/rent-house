module.exports = (sequelize, DataTypes) => {
  const Supplielrs = sequelize.define('Supplielrs', {
    productId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    dateFrom: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  /*User.associate = function(models) {
    User.hasMany(models.Contact, {
      foreignKey: 'userId',
      as: 'Contact',
    });
  };*/
  return User;
};
