const PROTO_PATH = __dirname + '/link-discoverer.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const config = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

let packageDefinition = protoLoader.loadSync(PROTO_PATH, config);
let linkDiscoverer = grpc.loadPackageDefinition(packageDefinition).linkDiscoverer;
const HOST = 'link-discover-unauth-enwgt7akpq-uc.a.run.app';
// const HOST = 'localhost';
const PORT = 443;

function main() {
  let client = new linkDiscoverer.LinkDiscoverer(`${HOST}:${PORT}`, grpc.credentials.createInsecure());
  let call = client.DiscoverLinks({ url: 'https://solaire8250.com/' });

  call.on('data', function (response) {
    console.log({ response });
  });

  call.on('end', function () {
    console.log('=> Done.');
  });
}

main();
