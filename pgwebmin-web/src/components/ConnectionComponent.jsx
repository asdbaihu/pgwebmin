'use strict';

const ConnectionStore = require('stores/ConnectionStore');
const ConnectionActionCreator = require('actions/ConnectionActionCreator');
const React = require('react');

const stores = {
  ConnectionStore: new ConnectionStore()
};


export default React.createClass({
    //mixins: [ConnectionStore.mixin],
    getStateFromStores() {
        /* Your code here! */
    },
    render: function() {
    return (
      <div id="vis-cont">
        hello
      </div>
    );
  }
});
