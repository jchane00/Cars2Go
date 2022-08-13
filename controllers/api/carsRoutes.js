const router = require('express').Router();
// use object destructuring to import our two models by name
const { Cars } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const carsData = await Cars.findAll();
    //res.status(200).json(carData);
    const cars = carsData.map((car) => car.get({ plain: true }));
    res.render('cars', { cars });
  } catch (err) {
    res.status(500).json(err);
  }
});

/// GET a single car
router.get('/:vin', async (req, res) => {
  try {
    const carsData = await Cars.findByPk(req.params.vin);

    if (!carsData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(carsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const carsData = await Cars.create(req.body);
    res.status(200).json(carsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete('/:vin', async (req, res) => {
  try {
    const carsData = await Cars.destroy({
      where: {
        vin_number: req.params.vin,
      },
    });

    if (!carsData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(carsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
