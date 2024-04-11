import {credentials, ServiceError} from "@grpc/grpc-js";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {InterceptorClient} from "../../proto/interceptor_grpc_pb";

const client = new InterceptorClient(
    `localhost:50055`,
    credentials.createInsecure()
);

function run() {
    client.getNothing(new Empty(), (err: ServiceError | null, response: Empty) => {
        console.log('----------  GOT RESPONSE FROM SERVER ----------');
        if (err) {
            console.error(`ERROR" ${err}`);
            return;
        }
        console.log(`Got response from server with interceptor`);
    });
}

run();
