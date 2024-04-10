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
Each example can be run separately:

#### Hello world
This example demonstrates simple unary request from client with HelloWorldRequest sent to server, modified by the server 
and returned to client as HelloWorldReply. Client prints the result to console.
 
Start the server with ``npm run helloWorldServer``

Run this example with ``npm run helloWorld``

#### Posts
This demonstrates a stream of data returned from the server.
Client will connect to the server and start listening for incoming posts data.
Whenever a post is emitted, client receives data and prints it to console.

Start the server with ``npm run postsServer``

Run example with: ``npm run posts``


#### Auth (NOT FINISHED - NOT WORKING PROPERLY)
This example demonstrates how to create secure TLS connection between server and client. 
Firstly you need to generate certificates which will be used for this example with a script: ``npm run generateCerts``.
Then as usual start server and client, it will send a simple request and receive a reply upon a successful connection.

Start the server with ``npm run authCheckServer``

Run example with ``npm run authCheck``
