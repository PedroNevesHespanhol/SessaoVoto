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
    const { Usuario } = req.body;
    const { Login } = req.body;
    const { Senha } = req.body;

    let SQL = "INSERT INTO politico ( Usuario, Login, Senha ) VALUES ( ?,?,? )";

    db.query(SQL, [Usuario, Login, Senha], (err, result) => {
        console.log(err);
    })
});

app.get("/getSessoes", (req, res) => {

    let SQL = "SELECT * from sessao";

    db.query(SQL, (err, result) => {
        if (err) console.log (err);
        else res.send(result);
    });
});

app.listen(3001, ()=> {
    console.log("rodando servidor");
});