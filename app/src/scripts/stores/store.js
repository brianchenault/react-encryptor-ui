var _ = require('lodash');
var Fluxxor = require('fluxxor');

var data = [
    require('./text'),
];

var stores = _.extend.apply(_, _.pluck(data, 'store'));
var actions = _.extend.apply(_, _.pluck(data, 'actions'));

var flux = window.flux = (window.flux || new Fluxxor.Flux(stores, actions));

module.exports = flux;

