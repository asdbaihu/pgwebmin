'use strict';

require('babel-core/polyfill');

let ConnectionComponent = require('components/ConnectionComponent');
let React = require('react');
let Fluxxor = require('fluxxor');

React.render(React.createElement(ConnectionComponent, {}), document.getElementById('main'));
