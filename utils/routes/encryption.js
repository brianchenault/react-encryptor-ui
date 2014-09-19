var crypto = require('crypto');
var encryptionKey = '602fa0d4-b840-45e1-b470-645b8eccba61';

exports.encrypt = function(req, res) {
    var algorithm = 'aes256';
    var cipher = crypto.createCipher(algorithm, encryptionKey);
    var encrypted = cipher.update(req.body.text, 'utf8', 'hex') + cipher.final('hex');
    res.send(encrypted);
};

exports.decrypt = function(req, res) {
    var algorithm = 'aes256';
    var decipher = crypto.createDecipher(algorithm, encryptionKey);
    var decrypted = decipher.update(req.body.text, 'hex', 'utf8') + decipher.final('utf8');
    res.send(decrypted);
};