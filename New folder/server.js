const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/Aarya", (req, res) => {
    res.send("Devarla");
})

app.get("/nesh", (req, res) => {
    res.send("Ganesan");
})

app.get("/suv", (req, res) => {
    res.send("Bastia");
})

app.listen(PORT, () => {
    console.log("listening")
})
