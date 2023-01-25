const Sequelize = require('sequelize')
const { STRING, INTEGER } = Sequelize
const db = require('../db');

const Comment = db.define('Comment', {
    id: {
        type: INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      text: {
        type: STRING(260),
        allowNull: false,
        comment: 'null',
      },
      userId: {
        type: INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      postId: {
        type: INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'Post',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
})

module.exports = Comment