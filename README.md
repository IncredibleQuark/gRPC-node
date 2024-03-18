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

Next you can execute different examples:

#### Hello world
This example demonstrates simple unary request from client with HelloWorldRequest sent to server, modified by the server 
and returned to client as HelloWorldReply. Client prints the result to console.

Run this example with ``npm run helloWorld``.

#### Posts
This demonstrates a stream of data returned from the server.
To run the script execute: ``npm run posts``. Client will connect to the server and start listening for incoming posts data.
Whenever a post is emitted, client receives data and prints it to console.
