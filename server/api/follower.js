const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/follower
router.get("/", async (req, res, next) => {
    try {
      const follower = await Follower.findAll({
        include: {model: User, as: 'followers'}
      });
      res.status(200).send(follower);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/follower/:id
  router.get("/:id", async (req, res, next) => {
    try {
      const follower = await Follower.findAll({
        where: {userId: req.params.id},
        include: {
                model: User, as:'followers'
        },
      });
      res.send(follower);
    } catch (err) {
      next(err);
    }
  });

   //POST route /api/follower/id
  router.post("/:id", async (req, res, next) => {
    try{
        const myFollower = await Follower.create(req.body)
        res.send(myFollower)
    } catch(err){
        next(err)
    }

  })

  //PUT route /api/follower/:id
  router.put("/:id", async (req, res, next) => {
    try{
        const myFollower = await Follower.findByPk(req.params.id)
        res.status(200).send(await myFollower.update(req.body));
    } catch(err){
        next(err)
    }

  })

  // DELETE route/api/follower/:id
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const follower = await Follower.findByPk(id);

      await follower.destroy()
      res.status(200).send(follower)
      
    } catch (error){
      next(error)
    }
  })
