//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const Follower = require('./models/Follower');
const Message = require('./models/Message');


//associations could go here!


  User.hasMany(Comment);
  User.hasMany(Post)
  User.hasMany(Message)
  User.hasMany(Follower)

  Follower.belongsTo(User);

  Message.belongsTo(User);

  Post.hasMany(Comment);
  Post.belongsTo(User);

  Comment.belongsTo(Post);
  Comment.belongsTo(User);


module.exports = {
  db,
  models: {
    User,
    Post,
    Comment,
    Follower,
    Message
  },
}
