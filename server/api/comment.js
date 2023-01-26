const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/comment
router.get("/", async (req, res, next) => {
    try {
      const comment = await Comment.findAll();
      res.status(200).send(comment);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/comment/:id
  router.get("/:id", async (req, res, next) => {
    try {

      const comment = await Comment.findByPk(req.params.id, {
        // include: {
        //   model: Post,
        //   include: { Comment,
        //     model: comment,
        //     include: {
        //       model: comment,

        //     },
        //   },
        // },
      });
      res.send(comment);
    } catch (err) {
      next(err);
    }
  });

   //POST route /api/comment
  router.post("/", async (req, res, next) => {
    try{
        const myComment = await Comment.create(req.body)
        res.send(myComment)
    } catch(err){
        next(err)
    }

  })

  //PUT route /api/comment/:id
  router.put("/:id", async (req, res, next) => {
    try{
        const myComment = await Comment.findByPk(req.params.id)
        res.status(200).send(await myComment.update(req.body));
    } catch(err){
        next(err)
    }

  })

  // DELETE route/api/comment/:id
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const comment = await Comment.findByPk(id);

      await comment.destroy()
      res.status(200).send(comment)
      
    } catch (error){
      next(error)
    }
  })