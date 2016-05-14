'use strict';

let MyFirstComponent = require('components/connectionComponent');
let React = require('react');

React.render(React.createElement(MyFirstComponent, {}), document.getElementById('main'));

var stores = {
  ConnectionStore: new ConnectionStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});