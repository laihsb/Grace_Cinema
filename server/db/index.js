const db = require('./_db');
const User = require('./models/User');
const Order = require('./models/Order');
const Movie = require('./models/Movie');
const Personnel = require('./models/Personnel');

Personnel.belongsToMany(Movie, {through: 'Movie_Personnel'});
Movie.belongsToMany(Personnel, {through: 'Movie_Personnel'});

User.belongsToMany(Order, {through: 'User_Order'});
Order.belongsToMany(User, {through: 'User_Order'});

Order.belongsToMany(Movie, {through: 'Order_Movie'});
Movie.belongsToMany(Order, {through: 'Order_Movie'});

module.exports = {
	db,
	User,
	Order,
	Movie,
	Personnel,
}
