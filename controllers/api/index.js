const router = require('express').Router();
const carsRoutes = require('./carsRoutes');
//const libraryCardRoutes = require('./libraryCardRoutes');

router.use('/cars', carsRoutes);
//router.use('/cards', libraryCardRoutes);



module.exports = router;
