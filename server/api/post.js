const router = require('express').Router()
module.exports = router
const { models: { Comment, Follower, Message, Post, User} } = require("../db");
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});


//GET route /api/post
router.get("/", async (req, res, next) => {
    try {
      const post = await Post.findAll({
      include: [{model:User}, {model:Comment}] 
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
        include: [{model:User}, {model:Comment}]
      });
      res.send(post);
    } catch (err) {
      next(err);
    }
  });

   //POST route /api/post
   router.post("/", upload.single("image"), (req, res, next) => {
    const post = new Post({
      text: req.body.text,
      image: req.file.path,
      userId: req.body.userId,
    });
    post
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Post created successfully",
          createdPost: {
            text: result.text,
            image: result.image,
            userId: result.userId,
            _id: result._id,
            request: {
              type: "GET",
              url: "http://localhost:8080/posts/" + result._id,
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });

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

