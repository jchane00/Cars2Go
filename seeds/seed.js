const sequelize = require('../config/connection');
//const { Reader, LibraryCard } = require('../models');
const { Cars, User } = require('../models');

const carsSeedData = require('./carSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const cars = await Cars.bulkCreate(carsSeedData, {
    individualHooks: true,
    returning: true,
  });

  const user = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

  
seedDatabase();
