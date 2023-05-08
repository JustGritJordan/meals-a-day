const User = require('./user');
const Meal = require('./meal');

User.hasMany(Meal, { foreignKey: 'user_id' });
Meal.belongsTo(User, { foreignKey: 'user_id' });
module.exports = { User, Meal };
