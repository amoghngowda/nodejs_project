const express = require('express');
const db = require('./1'); // Your database connection module
const app = express();
const router = require('./rotes/routes')
const person = require('./module/scheema'); // Import your Person model!!!  <-- This is the crucial fix
const bodyParser = require('body-parser'); // Correct spelling: bodyParser
require('dotenv').config();

app.use(bodyParser.json()); // Use bodyParser.json() to parse JSON request bodies



const port = process.env.PORT;
app.use('/user',router);
app.listen(port, () => {
    console.log("port started");
});
