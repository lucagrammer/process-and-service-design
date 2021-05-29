'use strict';

var utils = require('../utils/writer.js');
var Supplierly = require('../service/SupplierlyService');

module.exports.getCatalogue = function getCatalogue (req, res, next) {
  Supplierly.getCatalogue()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderMaterials = function orderMaterials (req, res, next, body) {
  Supplierly.orderMaterials(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
