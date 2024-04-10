// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authCheck_pb = require('./authCheck_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_authCheck_AuthCheckReply(arg) {
  if (!(arg instanceof authCheck_pb.AuthCheckReply)) {
    throw new Error('Expected argument of type authCheck.AuthCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authCheck_AuthCheckReply(buffer_arg) {
  return authCheck_pb.AuthCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthCheckService = exports.AuthCheckService = {
  getAuthStatus: {
    path: '/authCheck.AuthCheck/GetAuthStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: authCheck_pb.AuthCheckReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_authCheck_AuthCheckReply,
    responseDeserialize: deserialize_authCheck_AuthCheckReply,
  },
};

exports.AuthCheckClient = grpc.makeGenericClientConstructor(AuthCheckService);
