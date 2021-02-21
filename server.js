const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// for routes

app.use(require("./public/api.js"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });

app.listen(PORT, () => {
    console.log(`We got port ${PORT} in da house!`)
});