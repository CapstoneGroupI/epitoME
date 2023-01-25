const Sequelize = require('sequelize')
const { STRING, INTEGER } = Sequelize
const db = require('../db');

const Message = db.define('Message', {
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
        },
        receiverId: {
          type: INTEGER(11),
          allowNull: false,
          comment: 'null',
          references: {
            model: 'User',
            key: 'id',
          },
        }
    })

module.exports = Message