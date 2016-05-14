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
	    	logger.error('could not connect to postgres', err);
	    	return next(err);
	  	}

	  	//lets make the call
	  	logger.debug("Executing " + req.body.sql);
	  	return client.query(req.body.sql, function(err, result) {
		    if(err) {
		    	logger.error('error running query', err);
		    	return next(err);
		    }
		    logger.info("Returning " + result.rows.length + " rows");

		    //end the connection
		    client.end();

		    //send the result
		    res.send(200, result);
			return next();
		});
	});
	
   });
}

module.exports.routes = ConnectionRoutes;