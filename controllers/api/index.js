const router = require('express').Router();
const carsRoutes = require('./carsRoutes');
const addRoutes = require('./addRoutes');
const userRoutes = require('./user-routes');

router.use('/cars', carsRoutes);
router.use('/add', addRoutes);
router.use('/users', userRoutes);


module.exports = router;
