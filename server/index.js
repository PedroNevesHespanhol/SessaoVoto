const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors"); //serve para parar de dar erro

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "sessaovotos",
});

app.use(cors());
app.use(express.json());

//erros aqui
app.post("/register", (req, res) => {
    const { usuario } = req.body;
    const { login } = req.body;
    const { senha } = req.body;

    console.log(usuario);
});

app.listen(3001, ()=> {
    console.log("rodando servidor");
});