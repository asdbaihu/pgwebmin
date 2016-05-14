var constants = {
  ADD_CONNECTION: "ADD_CONNECTION"
};

var ConnectionStore = Fluxxor.createStore({
  initialize: function() {
    this.connectionId = 0;
    this.connections = {};

    this.bindActions(
      constants.ADD_CONNECTION, this.onAddConnection
    );
  },

  onAddConnection: function(payload) {
    //TODO - replace this with the actual payload
    payload = {
      user: 'brad',
      password: 'password1$',
      database: 'brad',
      host: 'localhost',
      port: 5432
    };

    //set up the new id
    var id = this._nextTodoId();
    var connection = {
      id: id,
      text: payload,
    };
    this.connections[id] = todo;
    this.emit("change");
  },

  getState: function() {
    return {
      todos: this.connections
    };
  },

  _nextTodoId: function() {
    return ++this.connectionId;
  }
});