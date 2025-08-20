require('dotenv').config();
const express = require("express");
const path = require('path');
const configViewEngine = require("./src/config/viewEngine");
// route
const webRoutes = require('./src/routes/web');
// config connection database
const connection = require('./src/config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine (EJS)
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);
app.use('/v2', webRoutes);

// simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(">>> results: ", results); 
        // console.log(">>> fields: ", fields); 
    }
);

app.listen(port, hostname, () => {
    console.log(`example app listening on port ${port}`)
});