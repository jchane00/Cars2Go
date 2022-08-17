const router = require('express').Router();
const carsRoutes = require('./carsRoutes');
const userRoutes = require('./user-routes');

router.use('/cars', carsRoutes);
router.use('/users', userRoutes);

module.exports = router;
