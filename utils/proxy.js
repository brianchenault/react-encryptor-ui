var path = require('path');
var request = require('request');
var express = require('express');
var api = require(__dirname + '/routes/encryption');
var app = express();

app.use(express.logger('dev'));
app.use(express.favicon());
app.use(express.bodyParser());
app.use(app.router);

module.exports = function (options) {

    options = options || {};
    options.server = options.server || 'dev';
    var port = options.port || 4444;
    var staticRoot = options.staticRoot || path.join(__dirname, '..', 'app');

    app.use(express['static'](staticRoot));

    app.post('/api/encrypt', api.encrypt);
    app.post('/api/decrypt', api.decrypt);

    return app.listen(port, function () {
        console.log('Now listening on port ' + port);
    });
};
