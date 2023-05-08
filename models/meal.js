// Each meal entry will contain user ID
// Will also contain time stamp of meal
// WIll include calories of specific meal
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init(
 {
  id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement: true,
  },
  food_name: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  food_type: {
   type: DataTypes.STRING,
   allowNull: false,
  },
  calories: {
   type: DataTypes.INTEGER,
  },
  date: {
   type: DataTypes.DATEONLY,
   allowNull: false,
   defaultValue: DataTypes.NOW,
  },
 },
 {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'Meal',
 }
);

module.exports = Meal;
