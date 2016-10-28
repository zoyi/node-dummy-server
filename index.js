var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var log = require('debug');

app.use(bodyParser());

var resource = function (req, res) {
  log('server:header')(req.headers);
  log('server:cookies')(req.cookies);
  log('server:query')(req.query);
  log('server:body')(req.body);

  res.send('{"result": "ok"}');
}

app.get('/', resource);
app.post('/', resource);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
