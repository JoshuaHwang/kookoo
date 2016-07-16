var express = require('express');
var app     = express();
var path    = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/menu', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/menu.html'));
});

app.get('/our-team', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/team.html'));
});

var port = process.env.PORT || 1337;
app.listen(port);

console.log(port + ' is the magic port!');
