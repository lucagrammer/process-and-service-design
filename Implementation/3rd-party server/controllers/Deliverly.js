'use strict';

var utils = require('../utils/writer.js');
var Deliverly = require('../service/DeliverlyService');

module.exports.getDeliveryDetails = function getDeliveryDetails (req, res, next, id) {
  Deliverly.getDeliveryDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.handleDelivery = function handleDelivery (req, res, next, body) {
  Deliverly.handleDelivery(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
