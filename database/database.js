const sequelize = require('sequelize'); //importando sequelize
                                        //database, use, pass
const connection = new sequelize('perguntabilizando', 'root', 'Mota@1180',{
    host: 'localhost', //host
    dialect: 'mysql' //type database
}); //fazendo conexão com o banco de dados


module.exports = connection; //exportando conexão