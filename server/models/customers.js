module.exports = (sequelize, DataTypes) => {
  const Costumer = sequelize.define('Costumers', {
    costumerId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    costumerPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costumerEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    otherCustomerDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Contact, {
      foreignKey: 'userId',
      as: 'Contact',
    });
  };
  return User;
};
