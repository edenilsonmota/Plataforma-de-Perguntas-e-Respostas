const express = require("express"); //importando modulo do express
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express(); //criando uma instancia do express

app.use(express.static('./public')); //entregando arquivos estáticos no Express
app.set('view engine', 'ejs'); //selecionando ejs para o express

app.get("/",(req, res) => {  //criando rota de principal
    

    res.render("index"); //renderizando views/index  
});

app.get("/perguntar",(req, res) => { //rotas perguntas
    res.render("perguntar"); //renderizando views/perguntar)
});

app.post("/pergunta-feita", (req, res) =>{ //recebendo dados do from, em method post
    res.send("formulario recebido!");
})


app.listen(8080,()=>{ //porta para rodar aplicação
    console.log("App rodando!");
})