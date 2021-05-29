'use strict';

var utils = require('../utils/writer.js');
var Bankly = require('../service/BanklyService');

module.exports.emitPayment = function emitPayment (req, res, next, body) {
  Bankly.emitPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
