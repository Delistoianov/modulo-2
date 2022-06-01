

const express = require("express");
var bodyParser = require("body-parser")
var port = 1590
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
