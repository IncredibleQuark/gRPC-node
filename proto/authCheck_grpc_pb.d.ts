// package: authCheck
// file: authCheck.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as authCheck_pb from "./authCheck_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IAuthCheckService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAuthStatus: IAuthCheckService_IGetAuthStatus;
}

interface IAuthCheckService_IGetAuthStatus extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, authCheck_pb.AuthCheckReply> {
    path: "/authCheck.AuthCheck/GetAuthStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<authCheck_pb.AuthCheckReply>;
    responseDeserialize: grpc.deserialize<authCheck_pb.AuthCheckReply>;
}

export const AuthCheckService: IAuthCheckService;

export interface IAuthCheckServer extends grpc.UntypedServiceImplementation {
    getAuthStatus: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, authCheck_pb.AuthCheckReply>;
}

export interface IAuthCheckClient {
    getAuthStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
    getAuthStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
    getAuthStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
}

export class AuthCheckClient extends grpc.Client implements IAuthCheckClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAuthStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
    public getAuthStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
    public getAuthStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authCheck_pb.AuthCheckReply) => void): grpc.ClientUnaryCall;
}
