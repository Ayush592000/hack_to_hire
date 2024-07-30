'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FlightData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FlightData.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.DATE,
    airport: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FlightData',
  });
  return FlightData;
};