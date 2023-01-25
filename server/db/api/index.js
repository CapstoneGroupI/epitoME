const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/users
router.get("/", async (req, res, next) => {
    try {
      // only users with a token will be able to see the users
      const users = await User.findAll({
        attributes: [
          "id",
          "username",
          "email",
          "firstName",
          "lastName",
          "birthday",
          "city",
          "state",
          "profilePic",
          "isAdmin"
        ],
      });
      res.status(200).send(users);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/users/:id
  router.get("/:id", async (req, res, next) => {
    try {
      // only users with token can view page
      const user = await User.findByPk(req.params.id, {
        include: {
          model: Post,
          include: { Comment,
            model: Follower,
            include: {
              model: Message,
            include: {
                model: Post,
            },
            },
          },
        },
      });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });