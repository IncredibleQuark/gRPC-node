// package: helloWorld
// file: helloWorld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as helloWorld_pb from "./helloWorld_pb";

interface IHelloWorldService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloWorldService_ISayHello;
}

interface IHelloWorldService_ISayHello extends grpc.MethodDefinition<helloWorld_pb.HelloWorldRequest, helloWorld_pb.HelloWorldReply> {
    path: "/helloWorld.HelloWorld/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloWorld_pb.HelloWorldRequest>;
    requestDeserialize: grpc.deserialize<helloWorld_pb.HelloWorldRequest>;
    responseSerialize: grpc.serialize<helloWorld_pb.HelloWorldReply>;
    responseDeserialize: grpc.deserialize<helloWorld_pb.HelloWorldReply>;
}

export const HelloWorldService: IHelloWorldService;

export interface IHelloWorldServer extends grpc.UntypedServiceImplementation {
    [sayHello: string]: grpc.handleUnaryCall<helloWorld_pb.HelloWorldRequest, helloWorld_pb.HelloWorldReply>;
}

export interface IHelloWorldClient {
    sayHello(request: helloWorld_pb.HelloWorldRequest, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
    sayHello(request: helloWorld_pb.HelloWorldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
    sayHello(request: helloWorld_pb.HelloWorldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
}

export class HelloWorldClient extends grpc.Client implements IHelloWorldClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: helloWorld_pb.HelloWorldRequest, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloWorld_pb.HelloWorldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloWorld_pb.HelloWorldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloWorld_pb.HelloWorldReply) => void): grpc.ClientUnaryCall;
}
