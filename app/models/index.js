const config = require('../config/db');
const Sequelize = require('sequelize');

const dataType = new Sequelize(
    config.DB
    config.USER,
    config.PASSWORD
    {           
        host: config.Host,
        dialect: config.dialect
    }
)
