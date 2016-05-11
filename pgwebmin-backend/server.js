var restify = require('restify');
var fs = require('fs');
var domain = require('domain');
var logger = require('winston');

var server = restify.createServer({
  name: "PGWebmin"
});

server.pre(restify.pre.sanitizePath());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.bodyParser());

//Global error handler
server.use(function(req, res, next) {
  var domainHandler = domain.create();

  domainHandler.on('error', function(err) {
    var errMsg = 'Request: \n' + req + '\n';
    errMsg += 'Response: \n' + res + '\n';
    errMsg += 'Context: \n' + err;
    errMsg += 'Trace: \n' + err.stack + '\n';

    logger.error(err.message || '');

    domain.dispose();
  });

  domainHandler.enter();
  next();
});

//Iterates through all ./routes files to find matching route
logger.info('Loading routes');
fs.readdirSync('./routes').forEach(function(curFile) {
  if (curFile.substr(-3) === '.js') {
    route = require('./routes/' + curFile);
    route.routes(server);
  }
});

logger.info('Attempting to start server');
server.listen(8080, function() {
  logger.info('%s is running at %s', 8080, restify.url);
});
