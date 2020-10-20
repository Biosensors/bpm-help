require("dotenv").config();
let port = process.env.APP_PORT;
const http = require('http');
const express = require('express');
const app = express();

app.use('/help', express.static(__dirname + '/html'));
app.use('/help/js', express.static(__dirname + '/js'));
app.use('/help/css', express.static(__dirname + '/css'));
app.use('/help/img', express.static(__dirname + '/img'));

http.createServer(app).listen(port, () => {
  console.log('HTTP Listening in port '+port+"!")
})