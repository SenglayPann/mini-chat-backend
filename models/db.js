const { Sequelize } = require('sequelize');

// Update these values with your PostgreSQL credentials
const sequelize = new Sequelize(
  process.env.PG_DATABASE || 'mini_chat_db',
  process.env.PG_USER || 'postgres',
  process.env.PG_PASSWORD || 'password',
  {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Database sync error:', err);
});

module.exports = sequelize;
