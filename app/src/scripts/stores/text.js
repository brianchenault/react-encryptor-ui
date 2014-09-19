var _ = require('ramda');
var Fluxxor = require('fluxxor');
var request = require('superagent');

var TextStore = Fluxxor.createStore({
    actions: {
        'ENCRYPT': 'handleAction',
        'DECRYPT': 'handleAction'
    },

    initialize: function() {
        this.text = '';
    },

    handleAction: function(payload) {
        this.text = payload.text;
        this.emit('change');
    },

    getState: function() {
        return {
            text: this.text
        };
    }
});

var actions = {
    encrypt: function(text) {
        var self = this;
        request
        .post('/api/encrypt')
        .send({ text: document.getElementById('textToProcess').value })
        .end(function(res){
            self.dispatch('ENCRYPT', {text: res.text});
        });
    },

    decrypt: function(text) {
        var self = this;
        request
        .post('/api/decrypt')
        .send({ text: document.getElementById('result').innerHTML })
        .end(function(res){
            self.dispatch('DECRYPT', {text: res.text});
        });
    }
};

module.exports = {
    store: {TextStore: new TextStore()},
    actions: {text: actions}
};