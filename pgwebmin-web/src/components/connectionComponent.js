'use strict';

const ConnectionStore = require('stores/connectionStore');
const ConnectionActions = require('actions/connectionActions');
const React = require('react');

export default React.createClass({
    mixins: [ConnectionStore.mixin],
    getStateFromStores() {
        /* Your code here! */
    },
    render() {
        /* Your code here! */
    }
});