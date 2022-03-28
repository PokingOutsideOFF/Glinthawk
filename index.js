const express = require("express");
const port = 8000;

const app = express();// Perform request

//Databse config
require("./config/mongodb.config");

app.get("/",(req, res) => {
    res.send("Welcome to Chai Api Charcha");
})


app.listen(port, () => {
    console.log("Server running on 8000. ");
})



