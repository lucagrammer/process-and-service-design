# Process and Service Design Project

Project for the Process and Service Design Project course at Politecnico di Milano.  
Jewelly is a manufacturing company that produces bespoke jewelry. Starting from the design of the jewel that the customer wants, Jewelly is able to produce it and deliver it directly to her/his home.

## **Archimate Modeling**

This part of the project consists in the design of the the archimate model (both the Business and the Application layer). The goal of the archimate model is to define the process at high level of granularity, how the consumer is connected to the enterprise and how the processes are related.
> The file of the final **Archimate Model** can be found in the [Archimate Delivery Folder](https://github.com/lucagrammer/Plug-IT/tree/master/Archimate/Deliverable).

## **Business Process Choreography and Soundness**

This part of the project consists in the design of the the business process orchestration and in the verification of the soundness property for a portion of it.
> The file of the final **Business Process Choreography** can be found in the [Choreography Delivery Folder](https://github.com/lucagrammer/Plug-IT/tree/master/Choreography/Deliverable).

## **Business Process Orchestration**

This part of the project consists in the design of the the business process orchestration.
> The file of the final **Business Process Orchestration** can be found in the [Orchestration Delivery Folder](https://github.com/lucagrammer/Plug-IT/tree/master/Orchestration/Deliverable).

## **Design and implementation of 3rd-party APIs**

This part of the project consists in the design and implementation of the APIs for the three following entities:
- Supplierly: raw material supplier
- Bankly: payment management partner
- Deliverly: delivery management partner

The APIs are defined via Swagger. The implementation of their mockups uses Node.js.

> The **APIs documentation** can be found in the [API docs Folder](https://github.com/lucagrammer/Plug-IT/tree/master/API%20docs/).

## **Executable Process**

This part of the project consists in the development of an _executable_ and _semplified version of a portion_ of the designed processes.

To run the process follow these steps:
1. Deploy the semplified version of the process to the Camunda Engine
2. Run the 3rd-party server using `npm start` in the terminal from the [3rd-party server Folder](https://github.com/lucagrammer/process-and-service-design/tree/main/3rd-party%20server)
3. Run the REST client using `node worker.js` in the terminal from the [jewelly client Folder](https://github.com/lucagrammer/process-and-service-design/tree/main/jewelly%20client)
4. Start the process from the Camunda Engine

## Authors

- Sivlia Locarno ([@silvialocarno](https://github.com/silvialocarno))
- Luca Minotti ([@lucagrammer](https://github.com/lucagrammer))
