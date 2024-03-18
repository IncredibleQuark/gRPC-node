import {HelloWorldClient} from "../../proto/helloWorld_grpc_pb";
import {credentials, ServiceError} from "@grpc/grpc-js";
import {HelloWorldReply, HelloWorldRequest} from "../../proto/helloWorld_pb";


const client = new HelloWorldClient(
    `localhost:50052`,
    credentials.createInsecure()
);

function run() {
    const request = new HelloWorldRequest();
    request.setName('John Johnson')
    client.sayHello(request, (err: ServiceError | null, response: HelloWorldReply) => {
        console.log('----------  GOT RESPONSE FROM SERVER ----------')
        console.log(response.getMessage())
    });
}

run();
