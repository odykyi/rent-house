module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    parentProductId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    productTypeCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplierCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookIsbn: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPublicationDate: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodContainsYn: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodDescription: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    foodFlavor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodIngredients: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    otherProductDetails: {
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
