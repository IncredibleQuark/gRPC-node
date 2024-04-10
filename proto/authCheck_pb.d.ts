// package: authCheck
// file: authCheck.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class AuthCheckReply extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): AuthCheckReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthCheckReply.AsObject;
    static toObject(includeInstance: boolean, msg: AuthCheckReply): AuthCheckReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthCheckReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthCheckReply;
    static deserializeBinaryFromReader(message: AuthCheckReply, reader: jspb.BinaryReader): AuthCheckReply;
}

export namespace AuthCheckReply {
    export type AsObject = {
        status: number,
    }
}
