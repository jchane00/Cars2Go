const router = require('express').Router();
const carsRoutes = require('./carsRoutes');
const addRoutes = require('./addRoutes');

router.use('/cars', carsRoutes);
router.use('/add', addRoutes);





module.exports = router;
