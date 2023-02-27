const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
    fName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
				validate: {
					isEmail: true
				}
    },
    type: {
        type: Sequelize.ENUM('customer', 'Admin'),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = User;
