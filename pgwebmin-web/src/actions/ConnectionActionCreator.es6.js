'use strict';

var actions = {
  getConnections: function() {
    return [
    {
      user: 'brad',
      password: 'password1$',
      database: 'brad',
      host: 'localhost',
      port: 5432
    }
    ];
  }
};

export default actions;