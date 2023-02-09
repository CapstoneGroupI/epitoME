const Sequelize = require('sequelize')
const { INTEGER } = Sequelize
const db = require('../db')

const Follower = db.define('Follower', {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: INTEGER,
        allowNull: true,
      },
      followerId: {
        type: INTEGER,
        allowNull: true,
      }
    })

    module.exports = Follower