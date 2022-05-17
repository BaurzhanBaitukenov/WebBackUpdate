const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const db = require('./config/keys.js')
const app = express();

mongoose
    .connect(db.uri)
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use("/", require("./routes/root"));
app.use("/games", require("./routes/games"));
app.use("/contact", require("./routes/contact"));
app.use("/temp", require("./routes/temp"));

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/users", require("./routes/users"));
app.use("/product", require("./routes/product"));
app.use("/AddedProduct", require("./routes/AddedProduct"));
//app.use('/admin', require('./routes/adminCon'));

module.exports = app;