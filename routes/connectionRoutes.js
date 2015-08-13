var restify = require('restify');
var pg = require('pg');
var ConnectionControler = require('../controllers/connectionController');

function ConnectionRoutes(server) {

  server.get('/connection', ConnectionControler.getConnections);
  
  server.post('/sql', function (req, res, next) {
	var client = new pg.Client("postgres://brad:password1$@localhost");
	client.connect(function(err) {
	  	if(err) {
	    	return console.error('could not connect to postgres', err);
	  	}
	  	console.log("Executing " + req.body.sql);
	  	client.query(req.body.sql, function(err, result) {
		    if(err) {
		    	return console.error('error running query', err);
		    }
		    console.log("Returning rows " + result.rows[0]);
		    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
		    client.end();
		});
	});
	res.send(200);
	return next();
   });
}

module.exports.routes = ConnectionRoutes;