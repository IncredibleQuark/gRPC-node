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

function main() {
    let target = 'localhost:50051';
    const client = new protoConfig.Greeter(target,
        grpc.credentials.createInsecure());
    let user = 'luki';
    client.sayHello({name: user}, function(err, response) {
        console.log('Greeting:', response.message);
    });
}

main();
