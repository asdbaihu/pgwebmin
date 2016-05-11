var ConnectionModel = require('../models/connectionModel');

var ConnectionController = {

  getConnections: function(req, res) {
    var connModel = new ConnectionModel();
    
    connModel.getConnections()
    .then(function(connections) {
      res.send(200, connections);
    })
    .catch(function(err) {
      res.send(500, { error: err });
    });
  },

};

module.exports = ConnectionController;