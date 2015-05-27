var express = require('express'),
  app = express()

app.get('/', function(req, res) {
  res.json(process.env);
});

app.get('/pid', function(req, res) {
  res.send(200, process.pid);
});

app.get('/:n', function(req, res) {
  res.send(200, process.env[req.params.n]);
});

app.listen(8080);