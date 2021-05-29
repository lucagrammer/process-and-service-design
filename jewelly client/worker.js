const {
  Client,
  logger,
  Variables,
} = require("camunda-external-task-client-js");
//const open = require('open');
const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asyncResponseTimeout: 10000,
};
// create a Client instance with custom configuration
const client = new Client(config);
var RESTClient = require("node-rest-client").Client;
var restclient = new RESTClient();

// susbscribe to the topic
client.subscribe("post-delivery", async function ({ task, taskService }) {
  // Get process variables
  const recipient = task.variables.get("recipient");
  const deliveryAddress = task.variables.get("deliveryAddress");
  console.log(
    `Sending delivery request to Deliverly... \nDelivery details: \n\t${recipient}, \n\t${deliveryAddress}`
  );
  const processVariables = new Variables();
  const localVariables = new Variables();
  var args = {
    data: { recipient: recipient, address: deliveryAddress },
    headers: { "Content-Type": "application/json" },
  };

  // direct way
  restclient.post(
    "http://localhost:9090/deliverly/delivery",
    args,
    function (data, response) {
      // parsed response body as js object
      processVariables.set("id", data.id);
      processVariables.set("orderStatus", data.status);
      processVariables.set("cost", data.cost);

      // raw response
      console.log("> Delivery request accepted: " + data.status);

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});

// susbscribe to the topic
client.subscribe("get-catalogue", async function ({ task, taskService }) {
  console.log(`Sending catalogue request to Supplierly...`);
  const processVariables = new Variables();
  const localVariables = new Variables();
  var args = {
    headers: { "Content-Type": "application/json" },
  };

  // direct way
  restclient.get(
    "http://localhost:9090/supplierly/catalogue",
    args,
    function (data, response) {
      // parsed response body as js object
      data.materials.forEach((element, index) => {
        processVariables.set(
          `productCatalogue${index}`,
          `Id: ${element.id}, Name: ${element.name}, Unitary price: ${element.price}€`
        );
      });

      // raw response
      console.log("> Catalogue successfully received ");

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});

// susbscribe to the topic
client.subscribe("post-order", async function ({ task, taskService }) {
  // Get process variables
  const mat1 = task.variables.get("material1");
  const mat2 = task.variables.get("material2");
  const mat3 = task.variables.get("material3");
  const q1 = task.variables.get("quantity1");
  const q2 = task.variables.get("quantity2");
  const q3 = task.variables.get("quantity3");
  console.log(`Sending raw material order request to Supplierly...`);
  const processVariables = new Variables();
  const localVariables = new Variables();
  var args = {
    data: {
      materials: [
        { id: mat1, quantity: q1 },
        { id: mat2, quantity: q2 },
        { id: mat3, quantity: q3 },
      ],
    },
    headers: { "Content-Type": "application/json" },
  };

  // direct way
  restclient.post(
    "http://localhost:9090/supplierly/order",
    args,
    function (data, response) {
      // parsed response body as js object
      processVariables.set("materialDate", data.deliveryDate);
      processVariables.set("materialCost", data.cost);
      processVariables.set("materialIban", data.iban);

      // raw response
      console.log(
        "> Raw material order request accepted. Total cost: " + data.cost
      );

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});

// susbscribe to the topic
client.subscribe("post-payment", async function ({ task, taskService }) {
  // Get process variables
  const cost = task.variables.get("materialCost");
  const iban = task.variables.get("materialIban");
  console.log(
    `Sending payment request to Bankly... \nBank account details: \n\tIBAN: ${iban}, \n\tAMOUNT:${cost}`
  );
  const processVariables = new Variables();
  const localVariables = new Variables();
  var args = {
    data: { iban: iban, amount: cost },
    headers: { "Content-Type": "application/json" },
  };
  // direct way
  restclient.post(
    "http://localhost:9090/bankly/payment",
    args,
    function (data, response) {
      // raw response
      console.log("> Payment successfully issued.");
      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});

// susbscribe to the topic
client.subscribe("post-reimbursement", async function ({ task, taskService }) {
  // Get process variables
  const cost = task.variables.get("issuedCost");
  const iban = task.variables.get("customerIBAN");
  console.log(
    `Sending client reimbursement request to Bankly... \nBank account details: \n\tIBAN: ${iban}, \n\tAMOUNT:${cost}`
  );
  const processVariables = new Variables();
  const localVariables = new Variables();
  var args = {
    data: { iban: iban, amount: cost },
    headers: { "Content-Type": "application/json" },
  };
  // direct way
  restclient.post(
    "http://localhost:9090/bankly/payment",
    args,
    function (data, response) {
      // raw response
      console.log("> Payment successfully issued.");
      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});
