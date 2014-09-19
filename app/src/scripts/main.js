/** @jsx React.DOM */

// Install Ramda to the global namespace first so all scripts can use it
require('ramda').installTo(window);

var React = require('react');

// Fluxxor
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin('LoginStore');
var flux = require('./stores/store');

// Views - These are our main screens of the app
var Dashboard = require('./views/screens/dashboard');

var App = React.createClass({
    mixins: [FluxMixin],

    render: function() {
        return (
            <Dashboard />
        );
    }
});

React.renderComponent(
  <App flux={flux} />,
  document.getElementById('app-container')
);

