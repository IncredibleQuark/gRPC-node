# gRPC - node.js

### Description
This is sample implementation of gRPC and protocol buffers in node.js based on official docs: [https://grpc.io/](https://grpc.io/).

### Prerequisites
Node version 8.13.0 or higher

### Installation
Install JS dependencies
``npm i``

Before running you have to generate .js and .d.ts files from .proto configuration. There is a script for that and you need to execute:
``npm run build``

### Running
First run server with ``npm run server`` it will start listening on defined port.

Next you can run client with ``npm run client`` and see results in console.

First example is a Hello World program. Server exposes sayHello method which can be called from client, 
then client prints out response from server.
