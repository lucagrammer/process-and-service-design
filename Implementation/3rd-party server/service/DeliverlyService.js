"use strict";

/**
 * Get details of an existing shipping request
 * This API allows to get details about a delivery
 *
 * id Integer Delivery identifier
 * returns Delivery
 **/
exports.getDeliveryDetails = function (id) {
  return new Promise(function (resolve, reject) {
    var deliveries = [
      {
        address: "via Pola, 12 - Milano (MI) 22060",
        cost: 12,
        recipient: "Mario Rossi",
        id: 0,
        status: "processing",
      },
      {
        address: "via Pascal, 12 - Milano (MI) 22060",
        cost: 10,
        recipient: "Paola Marelli",
        id: 1,
        status: "on delivery",
      },
      {
        address: "via Grandi, 12 - Milano (MI) 22060",
        cost: 12,
        recipient: "Anna Bianchi",
        id: 2,
        status: "delivered",
      },
      {
        address: "via Martini, 12 - Milano (MI) 22060",
        cost: 7,
        recipient: "Marco Piatti",
        id: 3,
        status: "lost",
      },
    ];
    if (id >= 0 && id <= 3) {
      resolve(deliveries[id]);
    } else {
      resolve({
        address: "via Grandi, 12 - Milano (MI) 22060",
        cost: 12,
        recipient: "Anna Bianchi",
        id: id,
        status: "delivered",
      });
    }
  });
};

/**
 * Make a shipping request to Deliverly
 * This API allows to submit a request for a new delivery
 *
 * body DeliveryRequest Details of the delivery to be placed
 * returns Delivery
 **/
exports.handleDelivery = function (body) {
  return new Promise(function (resolve, reject) {
    resolve({
      address: body.address,
      cost: 12,
      recipient: body.recipient,
      id: 0,
      status: "processing",
    });
  });
};
