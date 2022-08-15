const router = require('express').Router();

const { Cars } = require('../../models');

//Route to add new cars
router.post('/add', (req, res) => {
try {

const addCars = await Cars.create({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    mileage: req.body.mileage,
    condition: req.body.condition,
    image_name: req.body.image_name
    });

//Setup Sessions
 req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(userData);
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

// Login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });
  
  
  // Logout
  router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  
  module.exports = router;

