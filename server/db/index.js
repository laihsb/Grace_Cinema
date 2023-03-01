const db = require('./_db');
const User = require('./models/User');
const Order = require('./models/Order');
const Movie = require('./models/Movie');
const Personnel = require('./models/Personnel')

Personnel.belongsToMany(Movie, {through: 'MoviePersonnel'});
Movie.belongsToMany(Personnel, {through: 'MoviePersonnel'});
// if things are breaking because of User-Order, check the bottom of the User.js file in models/
User.belongsToMany(Order, {through: 'User_Order'});
Order.belongsToMany(User, {through: 'User_Order'});
// if things are breaking because of Order-Movie, check the bottom of the Order.js file in models/
Order.belongsToMany(Movie, {through: 'Order_Movie'});
Movie.belongsToMany(Order, {through: 'Order_Movie'});

module.exports = {
	db,
	User,
	Order,
	Movie,
	Personnel,
}
