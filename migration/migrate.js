const { sequelize } = require('../models/associations')

sequelize.sync({ alter: true}).then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Database sync error:', err);
});