const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const connection = require('./connection');

class Category extends Model { }

Category.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }, count: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
  , created: {
    type: Sequelize.DATE,
    allowNull: true
  }, updated: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
  });

module.exports = Category;