let port = "3000"
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
app.use('/', require('redirect-https')({}));
app.use('/', express.static(__dirname + '/html'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/hello', (req, res) => {
  res.send('Hello HTTPS!')
})

https.createServer(options, app).listen(port, () => {
  console.log('HTTPS Listening in port '+port+"!")
})