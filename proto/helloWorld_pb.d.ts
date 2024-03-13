// package: helloWorld
// file: helloWorld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloWorldRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloWorldRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloWorldRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloWorldRequest): HelloWorldRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloWorldRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloWorldRequest;
    static deserializeBinaryFromReader(message: HelloWorldRequest, reader: jspb.BinaryReader): HelloWorldRequest;
}

export namespace HelloWorldRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloWorldReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloWorldReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloWorldReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloWorldReply): HelloWorldReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloWorldReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloWorldReply;
    static deserializeBinaryFromReader(message: HelloWorldReply, reader: jspb.BinaryReader): HelloWorldReply;
}

export namespace HelloWorldReply {
    export type AsObject = {
        message: string,
    }
}
