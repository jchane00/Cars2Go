
const router = require('express').Router();

router.get('/login', async (req,res) => {
    res.render('login')
  });

  router.get('/', async (req,res) => {
    res.render('homepage')
  });
  module.exports = router;
