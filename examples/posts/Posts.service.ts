import {ServerWritableStream} from "@grpc/grpc-js";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {IPostServer} from "../../proto/post_grpc_pb";
import {PostReply, PostStatus} from "../../proto/post_pb";

// @ts-ignore:next-line
export class PostsService implements IPostServer {
    getPosts(call: ServerWritableStream<google_protobuf_empty_pb.Empty, PostReply>) {

        const posts: Array<{id: number, title: string; status: PostStatus, isDeleted: boolean}> = [
            {
                id: 1,
                title: 'Post 1',
                status: PostStatus.DRAFT,
                isDeleted: false,
            },
            {
                id: 22,
                title: 'New data!',
                status: PostStatus.DRAFT,
                isDeleted: false,
            },
            {
                id: 13,
                title: 'Bad weather :(',
                status: PostStatus.PUBLISHED,
                isDeleted: false,
            },
            {
                id: 44,
                title: '[OLD] Director resigns',
                status: PostStatus.PUBLISHED,
                isDeleted: true,
            }
        ];

        posts.forEach( (post) => {
            const reply = new PostReply();
            reply.setId(post.id);
            reply.setTitle(post.title);
            reply.setStatus(post.status);
            reply.setIsDeleted(post.isDeleted);
            call.write(reply);
        })

        call.end();
    }
}
