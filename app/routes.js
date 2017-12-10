
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

module.exports = function (app) {

  app.get('/api/images', function (req, res) {
    console.log('get', '/api/images');
    res.json({});
    res.end();
  });

  app.delete('/api/images', function (req, res) {
    console.log('delete', '/api/images');
    try {
      res.sendStatus(200);
    } catch (exception) {
      res.sendStatus(404);
    }
  });

  app.post('/api/images/upload', multipartyMiddleware, function(req, res) {
    console.log('post', '/api/images/upload');
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
    console.log(file.path);
    try {
      res.sendStatus(200);
    } catch (exception) {
      res.sendStatus(404);
    }
  });

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};
