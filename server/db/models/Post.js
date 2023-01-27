const Sequelize = require('sequelize');
const { DATE, STRING, INTEGER , TEXT} = Sequelize
const db = require('../db');

const Post = db.define('post', {
    text: {
        type: TEXT,
        allowNull: true,
        comment: 'null',
      },
      n_likes: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'null',
      },
      n_comments: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'null',
      },
    image: {
        type: STRING,
        allowNull: true,
    },
})

module.exports = Post