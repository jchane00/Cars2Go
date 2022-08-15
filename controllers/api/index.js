const router = require('express').Router();
const carsRoutes = require('./carsRoutes');
const addRoutes = require('./addRoutes');
//const libraryCardRoutes = require('./libraryCardRoutes');

router.use('/cars', carsRoutes);
router.use('/add', addRoutes);




module.exports = router;
