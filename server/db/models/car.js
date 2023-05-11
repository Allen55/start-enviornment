const Sequelize = require('sequelize');
const db = require('../database');


const Car = db.define('car', {
    year: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    make: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    }
})

module.exports = Car;