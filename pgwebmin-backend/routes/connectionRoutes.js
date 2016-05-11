var restify = require('restify');
var pg = require('pg');
var logger = require('winston').loggers.get('ConnectionModel');
var ConnectionControler = require('../controllers/connectionController');

function ConnectionRoutes(server) {

  server.get('/connection', ConnectionControler.getConnections);
  
  server.post('/sql', function (req, res, next) {
	var client = new pg.Client({
      user: 'brad',
      password: 'password1$',
      database: 'brad',
      host: 'localhost',
      port: 5432
    });
	client.connect(function(err) {
	  	if(err) {
	    	return logger.error('could not connect to postgres', err);
	  	}
	  	logger.debug("Executing " + req.body.sql);
	  	client.query(req.body.sql, function(err, result) {
		    if(err) {
		    	return logger.error('error running query', err);
		    }
		    logger.info("Returning rows " + result.rows[0]);
		    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
		    client.end();
		});
	});
	res.send(200);
	return next();
   });
}

module.exports.routes = ConnectionRoutes;