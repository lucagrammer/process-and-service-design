"use strict";

/**
 * Get the catalogue of the available raw materials
 * This API allows to get the catalogue of the available raw materials
 *
 * returns Catalogue
 **/
exports.getCatalogue = function () {
  return new Promise(function (resolve, reject) {
    var catalogue = {
      materials: [
        {
          id: 0,
          name: "Gold thread",
          price: 100,
          availability: 20,
        },
        {
          id: 1,
          name: "Silver thread",
          price: 90,
          availability: 23,
        },
        {
          id: 2,
          name: "Gemstone",
          price: 60,
          availability: 10,
        },
      ],
    };
    resolve(catalogue);
  });
};

/**
 * Place a raw material order to Supplierly
 * This API allows to submit a raw material order
 *
 * body OrderRequest Details of the order to be placed
 * returns Order
 **/
exports.orderMaterials = function ({ materials }) {
  return new Promise(function (resolve, reject) {
    var computedPrice = 0;
    const priceList = [100, 90, 60];
    materials.forEach((element) => {
      computedPrice += priceList[element.id] * element.quantity;
    });
    var order = {
      deliveryDate: "10/12/2022",
      cost: computedPrice,
      iban: "IT60-X054-2811-1010-0000-0123-456",
      materials: materials,
    };
    resolve(order);
  });
};
