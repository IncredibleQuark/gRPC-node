// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PostReply extends jspb.Message { 
    getId(): number;
    setId(value: number): PostReply;
    getTitle(): string;
    setTitle(value: string): PostReply;
    getStatus(): PostStatus;
    setStatus(value: PostStatus): PostReply;
    getIsDeleted(): boolean;
    setIsDeleted(value: boolean): PostReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostReply.AsObject;
    static toObject(includeInstance: boolean, msg: PostReply): PostReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostReply;
    static deserializeBinaryFromReader(message: PostReply, reader: jspb.BinaryReader): PostReply;
}

export namespace PostReply {
    export type AsObject = {
        id: number,
        title: string,
        status: PostStatus,
        isDeleted: boolean,
    }
}

export enum PostStatus {
    DRAFT = 0,
    PUBLISHED = 1,
    ARCHIVED = 2,
}
