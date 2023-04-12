require("dotenv").config
const express = require("express");
const app = express()
app.get("/", (req, res) => {
    res.json("Hello World")
})


app.listen(process.env.PORT || 3000, p => {
    console.log("Web server started");
})