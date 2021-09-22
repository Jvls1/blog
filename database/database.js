const Sequelize = require('sequelize')

//connection with database
const connection = new Sequelize('blognodejs','root','password',{
    host: '127.0.0.1',
    dialect: 'mariadb',
})

module.exports = connection