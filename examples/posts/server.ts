import { Server, ServerCredentials } from "@grpc/grpc-js";
import {PostsService} from "./posts.service";
import {PostService as PostServiceType} from "../../proto/post_grpc_pb";

const server: Server = new Server();
// @ts-ignore:next-line
server.addService(PostServiceType, new PostsService());

server.bindAsync('localhost:50053', ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Not secure server listening on port ${port}`);
});
