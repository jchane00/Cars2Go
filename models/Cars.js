const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model {}

Cars.init(
  {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    milage: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vin_number: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Cars',
  }
);

module.exports = Cars;
