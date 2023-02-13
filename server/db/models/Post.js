const { ARRAY } = require('sequelize');
const Sequelize = require('sequelize');
const { DATE, STRING, INTEGER , TEXT} = Sequelize
const db = require('../db');

const Post = db.define('post', {
    text: {
        type: TEXT,
        allowNull: true,
        comment: 'null',
      },
    image: {
        type: STRING,
    },
    rating: {
      type: ARRAY(INTEGER),
      defaultValue: [3],
      validate: {
        max: 5,
        min: 0,
      }
    }
})

module.exports = Post