let port = "2021"
const http = require('http');
// const fs = require('fs');
const express = require('express');
const app = express();
// const options = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// };
// app.use('/', require('redirect-https')({}));
app.use('/help', express.static(__dirname + '/html'));
app.use('/help/js', express.static(__dirname + '/js'));
app.use('/help/css', express.static(__dirname + '/css'));
app.use('/help/img', express.static(__dirname + '/img'));

app.get('/hello', (req, res) => {
  res.send('Hello HTTPS!')
})

http.createServer(app).listen(port, () => {
  console.log('HTTP Listening in port '+port+"!")
})