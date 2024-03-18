import { Server, ServerCredentials } from "@grpc/grpc-js";
import {HelloWorldService as HelloWorldServiceType} from "./proto/helloWorld_grpc_pb";
import {HelloWorldService} from "./examples/helloWorld/HelloWorld.service";
import {PostsService} from "./examples/posts/Posts.service";
import {PostService as PostServiceType} from "./proto/post_grpc_pb";

const server: Server = new Server();
// @ts-ignore:next-line
server.addService(HelloWorldServiceType, new HelloWorldService());
// @ts-ignore:next-line
server.addService(PostServiceType, new PostsService());

server.bindAsync('localhost:50052', ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Listening on port ${port}`);
});
