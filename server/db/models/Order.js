const Sequelize = require('sequelize');
const db = require('../_db');

const Order = db.define('movie', {
    quantities: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        }
    },
    total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false, 
        validate:{
          min: 0
        }
    },
    status: {
        type: Sequelize.ENUM('In Cart', 'Bought'),
        allowNull: false,
    }
});

module.exports = Order;