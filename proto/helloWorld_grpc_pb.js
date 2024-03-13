// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var helloWorld_pb = require('./helloWorld_pb.js');

function serialize_helloWorld_HelloWorldReply(arg) {
  if (!(arg instanceof helloWorld_pb.HelloWorldReply)) {
    throw new Error('Expected argument of type helloWorld.HelloWorldReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloWorld_HelloWorldReply(buffer_arg) {
  return helloWorld_pb.HelloWorldReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloWorld_HelloWorldRequest(arg) {
  if (!(arg instanceof helloWorld_pb.HelloWorldRequest)) {
    throw new Error('Expected argument of type helloWorld.HelloWorldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloWorld_HelloWorldRequest(buffer_arg) {
  return helloWorld_pb.HelloWorldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldService = exports.HelloWorldService = {
  sayHello: {
    path: '/helloWorld.HelloWorld/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloWorld_pb.HelloWorldRequest,
    responseType: helloWorld_pb.HelloWorldReply,
    requestSerialize: serialize_helloWorld_HelloWorldRequest,
    requestDeserialize: deserialize_helloWorld_HelloWorldRequest,
    responseSerialize: serialize_helloWorld_HelloWorldReply,
    responseDeserialize: deserialize_helloWorld_HelloWorldReply,
  },
};

exports.HelloWorldClient = grpc.makeGenericClientConstructor(HelloWorldService);
