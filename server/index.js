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


app.post("/register", (req, res) => {
    const { Usuario } = req.body;
    const { Login } = req.body;
    const { Senha } = req.body;

    let SQL = "INSERT INTO politico ( Usuario, Login, Senha ) VALUES ( ?,?,? )";

    db.query(SQL, [Usuario, Login, Senha], (err, result) => {
        console.log(err);
    })
});

app.post("/session", (req, res) => {
    const { NOME } = req.body;
    const { DESCRICAO } = req.body;
    const { ESTADO } = req.body;
    const { DATA_INICIAL } = req.body;
    const { DATA_FINAL } = req.body;

    let SQL = "INSERT INTO sessao ( NOME, DESCRICAO, ESTADO, DATA_INICIAL, DATA_FINAL ) VALUES ( ?,?,?,?,? )";

    db.query(SQL, [NOME, DESCRICAO, ESTADO, DATA_INICIAL, DATA_FINAL], (err, result) => {
        console.log(err);
    })
});

app.post("/votoSim", (req, res) => {

    let SQL = "INSERT INTO voto ( ESCOLHA ) VALUES ( 'Sim' )";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
});

app.post("/votoNao", (req, res) => {

    let SQL = "INSERT INTO voto ( ESCOLHA ) VALUES ( 'Não' )";

    db.query(SQL, (err, result) => {
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

app.put("/edit", (req, res) => {
    const { ID } = req.body;
    const { NOME } = req.body;
    const { DESCRICAO } = req.body;
    const { ESTADO } = req.body;
    let SQL = "UPDATE sessao SET NOME = ?, DESCRICAO = ?, ESTADO = ? WHERE ID = ?";
    db.query(SQL, [NOME, DESCRICAO, ESTADO, ID], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

//verificarDelete
app.delete("/delete/:id", (req, res) => {
const { ID } = req.params;
let SQL = "DELETE FROM sessao WHERE ID = ?";
db.query(SQL, [ID], (err, result) => {
    if (err) {
    console.log(err);
    } else {
    res.send(result);
    }
});
});

app.listen(3001, ()=> {
    console.log("rodando servidor");
});