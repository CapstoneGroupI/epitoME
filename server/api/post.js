const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/post
router.get("/", async (req, res, next) => {
    try {
      const post = await Post.findAll({
        include: User, Comment 
        });
      res.status(200).send(post);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/post/:id
  router.get("/:id", async (req, res, next) => {
    try {

      const post = await Post.findByPk(req.params.id,{
        include: Comment, User,
      });
      res.send(post);
    } catch (err) {
      next(err);
    }
  });

   //POST route /api/post
  router.post("/", async (req, res, next) => {
    try{
        const myPost = await Post.create(req.body)
        res.send(myPost)
    } catch(err){
        next(err)
    }

  })

  //PUT route /api/post/:id
  router.put("/:id", async (req, res, next) => {
    try{
        const myPost = await Post.findByPk(req.params.id)
        res.status(200).send(await myPost.update({rating: req.body}));
    } catch(err){
        next(err)
    }

  })

  // DELETE route/api/post/:id
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const post = await Post.findByPk(id);

      await post.destroy()
      res.status(200).send(post)
      
    } catch (error){
      next(error)
    }
  })

