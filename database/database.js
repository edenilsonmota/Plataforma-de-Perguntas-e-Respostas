const sequelize = require('sequelize'); //importando sequelize

const connection = new sequelize('guiaperguntas', 'root', 'Mota@1180',{
    host: 'localhost',
    dialect: 'mysql'
}); //fazendo coneção com o banco de dados


module.exports = connection; //exportando conexão