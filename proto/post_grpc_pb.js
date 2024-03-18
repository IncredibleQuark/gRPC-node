// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_pb = require('./post_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostReply(arg) {
  if (!(arg instanceof post_pb.PostReply)) {
    throw new Error('Expected argument of type post.PostReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostReply(buffer_arg) {
  return post_pb.PostReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostService = exports.PostService = {
  getPosts: {
    path: '/post.Post/GetPosts',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: post_pb.PostReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_post_PostReply,
    responseDeserialize: deserialize_post_PostReply,
  },
};

exports.PostClient = grpc.makeGenericClientConstructor(PostService);
