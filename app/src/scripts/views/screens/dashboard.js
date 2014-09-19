/** @jsx React.DOM */

var React = require('react');
var FluxChildMixin = require('fluxxor').FluxChildMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

var DashboardView = React.createClass({
    mixins: [FluxChildMixin, StoreWatchMixin('TextStore')],

    getStateFromFlux: function() {
        return this.getFlux().store('TextStore').getState();
    },

    render: function() {
        var textActions = this.getFlux().actions.text;

        return (
            <div>
                <input type="text" id="textToProcess"></input>
                <button onClick={textActions.encrypt}>encrypt</button>
                <button onClick={textActions.decrypt}>decrypt</button>
                <br/>
                <h1>Result: <span id="result">{this.state.text}</span></h1>
            </div>
        );
    }
});

module.exports = DashboardView;
