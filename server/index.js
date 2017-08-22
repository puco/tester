var express = require('express'),
  app = express();

app.get('/', function(req, res, next) {
  res.json({
    env: process.env,
    headers: req.headers
  });
});

app.get('/pid', function(req, res) {
  res.send(200, process.pid);
});

app.get('/:n', function(req, res) {
  res.send(200, process.env[req.params.n]);
});

app.listen(8080, '0.0.0.0');
console.log('running');