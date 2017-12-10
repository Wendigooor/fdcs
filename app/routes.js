
module.exports = function (app) {

  app.get('/api/images', function (req, res) {
    console.log('get', '/api/images')
    res.json({});
    res.end();
  });

  app.delete('/api/images', function (req, res) {
    console.log('delete', '/api/images')
    try {
      res.sendStatus(200);
    } catch (eption) {
      res.sendStatus(404);
    }
  });

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};
