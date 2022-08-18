const router = require('express').Router();

const { Cars } = require('../../models');
router.get('/', async (req, res) => {
    try {
      res.render('add', { loggedIn: !!req.session.user_id });
    } catch (err) {
      res.status(500).json(err);
    }
  });
// Route to add new cars
router.post('/add', async (req, res) => {
    // console.log("hit")
    try {

        const addCars = await Cars.create({ ...req.body });


        res.redirect('/api/cars');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;

