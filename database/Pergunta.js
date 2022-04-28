const sequelize = require("sequelize");
const connection = require("./database");


//definando e criando model table usando Sequelize
const Pergunta = connection.define('perguntas',{
    id: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    titulo:{
        type:sequelize.STRING, //text curtos
        allowNull: false
    },
    descricao:{
        type:sequelize.TEXT, //text longos
        allowNull: false
    }
});


//passando essa table para o banco de dados
Pergunta.sync({force: false}).then(() =>{});

module.exports = Pergunta;