var Q = require('q');
var logger = require('winston').loggers.get('ConnectionModel');

function ConnectionModel() {

  this.getConnections = function() {
    var dfd = Q.defer();

    try {
      logger.info('Getting list of connections');
      var connections = ['abc', '123'];
      dfd.resolve({
        connections: connections
      });
    } catch (err) {
      dfd.reject('Could not get list of connections: ' + err);
    }

    return dfd.promise;
  };

}

module.exports = ConnectionModel;