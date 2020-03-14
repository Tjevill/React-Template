const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.use(express.json());

const pool = mysql.createPool({
    //enter db credentials here
});

app.get("/", (req, res) => {
    res.send({ text: "Server response from '/'" });
});

app.listen(port, () =>
    console.log("Server is listening on http://localhost:5000")
);
