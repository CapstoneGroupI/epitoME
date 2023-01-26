const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/post
router.get("/", async (req, res, next) => {
    try {
      const post = await Post.findAll({
        attributes: [
            "text",
            "n_likes",
            "n_comments",
        ],
      });
      res.status(200).send(post);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/post/:id
  router.get("/:id", async (req, res, next) => {
    try {

      const post = await Post.findByPk(req.params.id, {
        // include: {
        //   model: Post,
        //   include: { Comment,
        //     model: Follower,
        //     include: {
        //       model: Message,

        //     },
        //   },
        // },
      });
      res.send(post);
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try{
        const myPost = await Post.create(req.body)
        res.send(myPost)
    } catch(err){
        next(err)
    }

  })

  router.put("/:id", async (req, res, next) => {
    try{
        const myPost = await Post.findByPk(req.params.id)
        res.status(200).send(await myPost.update(req.body));
    } catch(err){
        next(err)
    }

  })

  