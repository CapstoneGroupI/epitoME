const Sequelize = require('sequelize');
const { DATE, STRING, INTEGER , TEXT} = Sequelize
const db = require('../db');

const Post = db.define('post', {
    // postNumber: {
    //     type: INTEGER,
    //     allowNull: false, 
    //     primaryKey: true, 
    //     comment: 'null',
    //     autoIncrement: true,
    // },
    // userId: {
    //     type: INTEGER(11),
    //     allowNull: false,
    //     comment: 'null',
    //     references: {
    //         model: 'User',
    //         key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    // },
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
    // datePosted: {
    //     type: DATE
    // }
})

module.exports = Post