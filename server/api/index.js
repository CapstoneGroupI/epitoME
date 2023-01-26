const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/post', require('./post'));
router.use('/comment', require('./comment'));
router.use('/message', require('./message'))
router.use('/follower', require('./follower'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
