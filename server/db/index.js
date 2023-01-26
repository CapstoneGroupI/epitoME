//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const Follower = require('./models/Follower');
const Message = require('./models/Message');


//associations could go here!

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
