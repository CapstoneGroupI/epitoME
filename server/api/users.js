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
          "isAdmin",
          "rating",
          "pronouns"
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
      const user = await User.findAll({
        where: {id: req.params.id},
        // include: Post, Comment, Follower, Message, User
        include: [ {model:Comment}, {model:Follower}, {model:Post}, {model:Message}]
      });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });

//GET route /api/users/:id/followers
router.get("/:id/followers", async (req, res, next) => {
  try {
    // only users with token can view page
    const users = await User.findAll({
      where: {id: req.params.id},
      include: [{ model: User, as: 'followers' }]
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

  // POST route /api/users
router.post("/", async (req, res, next) => {
  try {
    const uniqueUserEmail = await User.findOne({
      where: { email: req.body.email },
    });
    const uniqueUsername = await User.findOne({
      where: { username: req.body.username },
    });

    if (uniqueUserEmail || uniqueUsername) {
      let err = new Error("must have unique email or username!");
      next(err);
    }
    res.status(201).send(await User.create(req.body));
  } catch (err) {
    next(err);
  }
});

// router.post(":id/users", async (req, res, next) => {
//   try {
//     const addFellow = await User.
//   }
// })

// PUT route /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).send(await user.update(req.body));

    }
   catch (error) {
    next(error);
  }
});

// DELETE route /api/users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
  
      await user.destroy();
      res.status(200).send(user);
   }
    catch (error) {
    next(error);
  }
});