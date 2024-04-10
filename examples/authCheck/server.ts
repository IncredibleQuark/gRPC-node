import { Server, ServerCredentials } from "@grpc/grpc-js";
import fs from 'fs';
import {AuthCheckService} from "./authCheck.service";
import {AuthCheckService as AuthCheckServiceType} from "../../proto/authCheck_grpc_pb";


const server: Server = new Server();
// @ts-ignore:next-line
server.addService(AuthCheckServiceType, new AuthCheckService());

const ca: Buffer = fs.readFileSync('./certs/ca.crt');
// const privateKey: Buffer = fs.readFileSync('./certs/key.pem');
// const certChain: Buffer = fs.readFileSync('./certs/server.csr');

server.bindAsync('localhost:50054', ServerCredentials.createSsl(ca, [], false), (err: Error | null, port: number) => {
    if (err) {
        console.error(err);
    }
    console.log(`Secure server listening on port ${port}`);
});
