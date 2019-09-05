const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const connection = require('./connection');

class Post extends Model { }

Post.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  },
  tag: {
    type: Sequelize.STRING,
    allowNull: true,
  }, brief: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  postPath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picPath: {
    type: Sequelize.STRING,
    allowNull: true
  },
  created: {
    type: Sequelize.DATE,
    allowNull: true
  },
  updated: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
  });

module.exports = Post;