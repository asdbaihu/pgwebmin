'use strict';

import Fluxxor from "fluxxor";
const ACTION_TYPES = require('constants/ActionTypes');

var ConnectionStore = Fluxxor.createStore({
  initialize: function() {
    this.loading = false;
    this.error = null;
    this.words = {};

    this.bindActions(
      ACTION_TYPES.GET_CONNECTIONS, this.onGetConnections
    );
  },

  onGetConnections: function() {
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
});

export default ConnectionStore;