import {credentials, ServiceError} from "@grpc/grpc-js";
import fs from "fs";
import path from 'path';
import {AuthCheckClient} from "../../proto/authCheck_grpc_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {AuthCheckReply} from "../../proto/authCheck_pb";

const ca: Buffer = fs.readFileSync(path.resolve(__dirname + '../../../certs/client.crt'));
const client = new AuthCheckClient(
    `localhost:50054`,
    credentials.createSsl(ca)
);

function run() {
    client.getAuthStatus(new Empty(), (err: ServiceError | null, response: AuthCheckReply) => {
        console.log('----------  GOT RESPONSE FROM SERVER ----------');
        if (err) {
            console.error(`ERROR" ${err}`);
            return;
        }
        console.log(`Got auth check status: ${response.getStatus()}`);
    });
}

run();
