import { Server, ServerCredentials } from "@grpc/grpc-js";
import {HelloWorldService as HelloWorldServiceType} from "./proto/helloWorld_grpc_pb";
import {HelloWorldService} from "./examples/helloWorld/HelloWorld.service";

const server: Server = new Server();
// @ts-ignore:next-line
server.addService(HelloWorldServiceType, new HelloWorldService());

server.bindAsync('localhost:50052', ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Listening on port ${port}`);
});
