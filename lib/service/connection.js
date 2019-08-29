const Sequelize = require('sequelize');

const config = require('../../config');

const sequelize = new Sequelize(config.mysqlUrl, config.pool);

module.exports = sequelize;