const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");

//GET route /api/message
router.get("/", async (req, res, next) => {
    try {
      const message = await Message.findAll({
        include: [{ model: User }],
      });
      res.status(200).send(message);
    } catch (err) {
      next(err);
    }
  });

  //GET route /api/message/:id
  router.get("/:id", async (req, res, next) => {
    try {

      const message = await Message.findByPk(req.params.id,{
        include: [{ model: User }],
      });
      res.send(message);
    } catch (err) {
      next(err);
    }
  });

   //POST route /api/message
  router.post("/", async (req, res, next) => {
    try{
        const myMessage = await Message.create(req.body)
        res.send(myMessage)
    } catch(err){
        next(err)
    }

  })

  //PUT route /api/message/:id
  router.put("/:id", async (req, res, next) => {
    try{
        const myMessage = await Message.findByPk(req.params.id)
        res.status(200).send(await myMessage.update(req.body));
    } catch(err){
        next(err)
    }

  })

  // DELETE route/api/message/:id
  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const message = await Message.findByPk(id);

      await message.destroy()
      res.status(200).send(message)
      
    } catch (error){
      next(error)
    }
  })
