import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {IInterceptorServer} from "../../proto/interceptor_grpc_pb";

// @ts-ignore:next-line
export class InterceptorService implements IInterceptorServer {
    getNothing(call: ServerUnaryCall<Empty, Empty>, callback: sendUnaryData<Empty>) {
        const reply: Empty = new Empty();
        console.log('Sending response to client');
        callback(null, reply);
    }
}
