const express = require("express");
var bodyParser = require("body-parser")
var port = process.env.PORT || 1590;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/usuario", (req, res) => {
    console.log("get funcionando")
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(JSON.stringify(
        {
            nacionalidade: "Brasileiro",
            endereco: "Rua M.M.D.C - Butantã, São Paulo",
            telefone: "(32)988778483",
            email: "joao.gonzalez@sou.inteli.edu.br",
        }))
})

app.listen(port, () => {
    console.log(`Server running.`);
})

var sqlite3 = require('sqlite3').verbose()
var bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})
app.use(express.static("../src/")); // pega o diretório do front
app.use(express.json()); // pega o diretório do node.js
const DBSOURCE = "database.db" // responsável pela operação do bd
app.use(express.urlencoded({
    extended: true
}))
app.get('/returnDatabase', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var get = 'SELECT * FROM info_eu';
    var db = new sqlite3.Database(DBSOURCE);
    db.all(get, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var sql = "INSERT INTO info_eu (nome, email, telefone) VALUES ('" + req.body.Nome + "','" + req.body.Email + "', '" + req.body.Telefone + "')";
    var db = new sqlite3.Database(DBSOURCE);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});

