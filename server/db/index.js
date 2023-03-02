const db = require('./_db');
const User = require('./models/User');
const Order = require('./models/Order');
const Movie = require('./models/Movie');
const Personnel = require('./models/Personnel');
const { Sequelize } = require('sequelize');

// Personnel.belongsToMany(Movie, {through: 'Movie_Personnel'});
// Movie.belongsToMany(Personnel, {through: 'Movie_Personnel'});

// User.belongsToMany(Order, {through: 'User_Order'});
// Order.belongsToMany(User, {through: 'User_Order'});

// Order.belongsToMany(Movie, {through: 'Order_Movie'});
// Movie.belongsToMany(Order, {through: 'Order_Movie'});

const Movie_Personnel = db.define('Movie_Personnel', {
  MovieId: {
    type: Sequelize.INTEGER,
    references: {
      model: Movie,
      key: 'id'
    }
  },
  PersonnelId: {
    type: Sequelize.INTEGER,
    references: {
      model: Personnel,
      key: 'id'
    }
  }
}, { timestamps: false });

const User_Order = db.define('User_Order', {
  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  OrderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  }
}, { timestamps: false });

const Order_Movie = db.define('Order_Movie', {
  OrderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  },
  MovieId: {
    type: Sequelize.INTEGER,
    references: {
      model: Movie,
      key: 'id'
    }
  }
}, { timestamps: false });

module.exports = {
	db,
	User,
	Order,
	Movie,
	Personnel,
	Movie_Personnel,
	User_Order,
	Order_Movie
}
