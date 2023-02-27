const db = require('./_db');
const User = require('./user');
const Order = require('./order');
const Movie = require('./movie');
const Personnel = require('./personnel')

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
