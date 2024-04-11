import {Server, ServerCredentials} from "@grpc/grpc-js";
import {InterceptorService} from "./interceptor.service";
import {InterceptorService as InterceptorServiceType} from "../../proto/interceptor_grpc_pb";
import {
    ServerInterceptingCall,
    ServerInterceptingCallInterface,
    ServerInterceptor,
    FullResponder, ResponderBuilder, ServerListenerBuilder
} from "@grpc/grpc-js/build/src/server-interceptors";
import {ServerMethodDefinition} from "@grpc/grpc-js/build/src/make-client";

const logger = (message: string) => {
    console.log(`LOG (server):${(new Date()).toISOString()}) - ${message}`);
}

const interceptor: ServerInterceptor = (methodDescriptor: ServerMethodDefinition<any, any>, call: ServerInterceptingCallInterface): ServerInterceptingCall => {
    const listener = new ServerListenerBuilder()
        .withOnReceiveMetadata((metadata, next) => {
            logger(`Received metadata: ${JSON.stringify(metadata)}`);
            next(metadata);
        })
        .withOnReceiveMessage( (message, next) => {
            logger(`Received message: ${message}`)
            next(message);
        })
        .withOnReceiveHalfClose( (next) => {
            logger('Received half close')
            next();
        })
        .withOnCancel( () => {
            logger('Request cancelled')
        })
        .build();
    const responder: Partial<FullResponder> = new ResponderBuilder()
        .withStart(next => {
            logger('Starting responder')
            next(listener);
        })
        .withSendMessage((message, next) => {
            logger(`Sending message: ${message}`);
            next(message);
        })
        .withSendStatus((status, next) => {
            logger(`Sending status: ${JSON.stringify(status)}`);
            next(status);
        })
        .build();
    return new ServerInterceptingCall(call, responder);
}

const server: Server = new Server({interceptors: [interceptor]});
// @ts-ignore:next-line
server.addService(InterceptorServiceType, new InterceptorService());


server.bindAsync('localhost:50055', ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Secure server listening on port ${port}`);
});
