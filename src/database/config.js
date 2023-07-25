const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  database: 'motorepairdb',
  username: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  logging: false,
});

module.exports = { db };
