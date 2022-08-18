
const router = require('express').Router();
const { Cars } = require('../models');

router.get('/login', async (req,res) => {
    res.render('login')
  });

router.get('/', async (req,res) => {
  const carsData = await Cars.findAll();
    const cars = carsData.map((car) => car.get({ plain: true }));

    res.render('cars', { cars, loggedIn: !!req.session.user_id });
    //res.render('homepage')
  });
  module.exports = router;

