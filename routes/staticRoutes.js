var restify = require('restify');

function StaticRoutes(api) {
	//serve static files
	api.get(/\/public\/?.*/, restify.serveStatic({
	  directory: './public'
	}));
}

module.exports.routes = StaticRoutes;