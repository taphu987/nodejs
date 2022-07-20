const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes/index.js");
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use("*/css", express.static(path.join(__dirname, "public/css")));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Init Routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
