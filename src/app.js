// core modules
const path = require("path");

// npm modules
const express = require("express");
const ejs = require("ejs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(8000, () => {
    console.log("Server running on port 3000.");
});
