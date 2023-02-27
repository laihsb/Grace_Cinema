const db = require('./_db');
const User = require('./User');
const Order = require('./models/Order');
const Movie = require('./Movie');
const Personnel = require('./Personnel')

// User.hasMany(Order);
// Order.belongsTo(User);
// Personnel.hasMany(Movie);
// Movie.hasMany(Personnel);
// Order.hasMany(Movie);
// Movie.hasMany(Order);

Personnel.belongsToMany(Movie, {through: 'MoviePersonnel'});
Movie.belongsToMany(Personnel, {through: 'MoviePersonnel'});

module.exports = {
	db,
	User,
	Order,
	Movie,
	Personnel
}
