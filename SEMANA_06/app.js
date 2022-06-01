const express = require("express");
const bp = require("body-parser");
const app = express();
const hostname = "127.0.0.1";
const port = 3030;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db");
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());


app.get("/usuario", (req, res) => {

})









app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});