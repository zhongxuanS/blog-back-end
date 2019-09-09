const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const connection = require('./connection');

class Notepad extends Model { }


Notepad.init({
  content: {
    type: Sequelize.STRING,
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

module.exports = Notepad;