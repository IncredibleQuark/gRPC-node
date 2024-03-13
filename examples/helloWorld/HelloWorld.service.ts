import {IHelloWorldServer} from "../../proto/helloWorld_grpc_pb";
import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {HelloWorldReply, HelloWorldRequest} from "../../proto/helloWorld_pb";

// @ts-ignore:next-line
export class HelloWorldService implements IHelloWorldServer {
    sayHello(call: ServerUnaryCall<HelloWorldRequest, HelloWorldReply>, callback: sendUnaryData<HelloWorldReply>) {
        const reply = new HelloWorldReply();
        reply.setMessage(`Hello from server: ${call.request.getName()}`)
        callback(null, reply);
    }
}
