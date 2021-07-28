const { HelloClient } = require('./hello_grpc_web_pb.js');
const grpcClient = new HelloClient('http://localhost:8080', null, null);

export default grpcClient;

