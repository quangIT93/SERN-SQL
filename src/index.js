const express = require("express");
const cors = require("cors");
const { engine } = require("express-handlebars");
const path = require("path");
require("dotenv").config();
const app = express();
// const route = require("./routes/index");
const route = require("./routes");

// HTTP request logger middleware for node.js
const morgan = require("morgan");

// Do request gui len dang json nen can bien doi no
app.use(express.json());
app.use(cors());

// create logger when has request
app.use(morgan("common"));

// lien ket thu muc public lay ra anh img
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => res.send("hello world"));

app.engine(".hbs", engine({ defaultLayout: "mainLayout", extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "public/views/"));
const PORT = process.env.port || 3000;

route(app);

app.listen(PORT, () => console.log(`app listenning port ${PORT}`));
