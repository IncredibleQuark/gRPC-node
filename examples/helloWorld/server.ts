import { Server, ServerCredentials } from "@grpc/grpc-js";
import {HelloWorldService} from "./helloWorld.service";
import {HelloWorldService as HelloWorldServiceType} from "../../proto/helloWorld_grpc_pb";

const server: Server = new Server();
// @ts-ignore:next-line
server.addService(HelloWorldServiceType, new HelloWorldService());

server.bindAsync('localhost:50052', ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Not secure server listening on port ${port}`);
});
