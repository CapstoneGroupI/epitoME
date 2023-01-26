const Sequelize = require('sequelize')
const { INTEGER } = Sequelize
const db = require('../db')

const Follower = db.define('Follower', {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      // userId: {
      //   type: INTEGER(11),
      //   allowNull: false,
      //   comment: "null",
      //   references: {
      //     model: 'User',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      // followerId: {
      //   type: INTEGER(11),
      //   allowNull: false,
      //   comment: "null",
      //   references: {
      //     model: 'User',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // }
    })

    module.exports = Follower