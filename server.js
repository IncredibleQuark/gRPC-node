const PROTO_PATH = __dirname + '/config.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const protoConfig = grpc.loadPackageDefinition(packageDefinition).config;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    console.log('Got request from client', call);
    callback(null, {message: 'Hello ' + call.request.name});
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    const server = new grpc.Server();
    server.addService(protoConfig.Greeter.service, {sayHello: sayHello});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err != null) {
            return console.error(err);
        }
        console.log(`gRPC listening on ${port}`)
    });
}

main();
