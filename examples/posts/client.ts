import { credentials } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { PostClient } from "../../proto/post_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import { PostReply } from "../../proto/post_pb";
import * as post_pb from "../../proto/post_pb";


const client = new PostClient(
    `localhost:50053`,
    credentials.createInsecure()
);

function run() {
    console.log(`---------- Start receiving posts ----------`)
    const stream: grpc.ClientReadableStream<post_pb.PostReply> = client.getPosts(new Empty());

    const posts: PostReply[] = [];
    stream.on('data', (post) => {
        posts.push(post);
        console.log(`Received new post: \n ID: ${post.getId()}, \n Title: ${post.getTitle()}, \n Status: ${post.getStatus()}, \n IsDeleted: ${post.getIsDeleted()} \n`);
    });

    stream.on('error', () => console.error(`---------- Receiving post error occurred ----------`));

    stream.on('end', () => console.log(`---------- All posts received, got: ${posts.length} total posts ----------`))
}

run();
