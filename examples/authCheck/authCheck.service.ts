import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {IAuthCheckServer} from "../../proto/authCheck_grpc_pb";
import {AuthCheckReply} from "../../proto/authCheck_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";

// @ts-ignore:next-line
export class AuthCheckService implements IAuthCheckServer {
    getAuthStatus(call: ServerUnaryCall<Empty, AuthCheckReply>, callback: sendUnaryData<AuthCheckReply>) {
        const reply = new AuthCheckReply();
        reply.setStatus(201);
        callback(null, reply);
    }
}
