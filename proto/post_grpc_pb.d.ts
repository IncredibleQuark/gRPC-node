// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as post_pb from "./post_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPostService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPosts: IPostService_IGetPosts;
}

interface IPostService_IGetPosts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, post_pb.PostReply> {
    path: "/post.Post/GetPosts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<post_pb.PostReply>;
    responseDeserialize: grpc.deserialize<post_pb.PostReply>;
}

export const PostService: IPostService;

export interface IPostServer extends grpc.UntypedServiceImplementation {
    getPosts: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, post_pb.PostReply>;
}

export interface IPostClient {
    getPosts(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostReply>;
    getPosts(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostReply>;
}

export class PostClient extends grpc.Client implements IPostClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPosts(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostReply>;
    public getPosts(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<post_pb.PostReply>;
}
