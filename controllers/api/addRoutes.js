const router = require('express').Router();

const { Cars } = require('../../models');
// Route to add new cars
router.post('/add', async (req, res) => {
    // console.log("hit")
try {

const addCars = await Cars.create({...req.body});

// //Setup Sessions
// //  req.session.save(() => {
// //     req.session.loggedIn = true;
res.redirect('/api/cars');
    // res.status(200);

//   });
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
          employee_id: req.body.employee_id,
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
          .json({ user: userData, message: 'You are now logged in!' });
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

