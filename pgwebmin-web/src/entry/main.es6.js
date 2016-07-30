'use strict';

require('babel-core/polyfill');

let ConnectionComponent = require('components/ConnectionComponent');
let React = require('react');

React.render(React.createElement(ConnectionComponent, {}), document.getElementById('main'));
