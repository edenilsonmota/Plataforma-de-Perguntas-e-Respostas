const express = require("express"); //importando modulo do express
const app = express(); //criando uma instancia do express
const bodyParser = require("body-parser"); //import body-parser
const connection = require("./database/database");//import database
const Pergunta = require("./database/Pergunta"); //import model database pergunta

//database
connection  //fazendo/autenticando conexão
    .authenticate() //estrutura promise
    .then(() => {
        console.log("Conexão feita com o banco de dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.use(express.static('./public')); //entregando arquivos estáticos no Express
app.set('view engine', 'ejs'); //selecionando ejs para o express

app.use(bodyParser.urlencoded({extended: false})); //decodificar dados enviados pelo formulário
app.use(bodyParser.json()); //ler dados de formulario via json



//Rotas
app.get("/",(req, res) => {  //criando rota de principal
    Pergunta.findAll({raw:true}).then(perguntas =>{
        res.render("index",{
            perguntas:perguntas
        })
    }); //Select * All From perguntas
    res.render("index"); //renderizando views/index  
});

app.get("/perguntar",(req, res) => { //rotas perguntas
    res.render("perguntar"); //renderizando views/perguntar)
});

app.post("/pergunta-realizada", (req, res) =>{ //recebendo dados do from, em method post
    var titulo = req.body.titulo; //pegando dados do formulario pela name = titulo
    var descricao = req.body.descricao;
    //salvar perguntas
    Pergunta.create({
        titulo: titulo, //name colunn e name var
        descricao: descricao //name colunn e name var
    }).then(() => {
        res.redirect("/");
    });   
});


app.listen(8080,()=>{ //porta para rodar aplicação
    console.log("App rodando!");
})