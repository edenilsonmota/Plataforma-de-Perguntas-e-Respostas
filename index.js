const express = require("express"); //importando modulo do express
const app = express(); //criando uma instancia do express
const bodyParser = require("body-parser"); //importando body-parser
const connection = require("./database/database");//import database

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
    res.render("index"); //renderizando views/index  
});

app.get("/perguntar",(req, res) => { //rotas perguntas
    res.render("perguntar"); //renderizando views/perguntar)
});

app.post("/pergunta-realizada", (req, res) =>{ //recebendo dados do from, em method post
    var titulo = req.body.titulo; //pegando dados do formulario pela name = titulo
    var descricao = req.body.descricao;
    res.send("formulario recebido!");
})


app.listen(8080,()=>{ //porta para rodar aplicação
    console.log("App rodando!");
})