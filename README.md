# Hello gRPC Client React

It is the Hello gRPC web client developed using React framework. It can be used to interact with [Hello gRPC server](https://github.com/digital-worx/hello-grpc-node).

## Prerequisites

### Node

Install Node js version 12.18.1. We installed it using [nvm](https://github.com/nvm-sh/nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 12.18.1
```

### Protocol Compiler

You can download it from protobuf [release page](https://github.com/protocolbuffers/protobuf/releases). It can be install using `apt` in the Ubuntu OS.

```
sudo apt update
sudo apt install protobuf-compiler
```

### grpc web protoc plugin

You can download the `protoc-gen-grpc-web` protoc plugin from the grpc-web [release page](https://github.com/grpc/grpc-web/releases). Copy the binary and make it executable.

```bash
chmod +x /usr/local/bin/protoc-gen-grpc-web
```

### Client Configuration Generation

A gRPC web client requires proto message and service stub in `js` format. They are presented in the [middleware](src/middleware) directory. They ( `hello_grpc_web_pb.js` and `hello_pb.js` ) must be regenerated when you make changes in `hello.proto`. You need to clone [googleapis](https://github.com/googleapis/googleapis) repository.

```
git clone https://github.com/googleapis/googleapis
export GOOGLEAPIS_DIR=<your-local-googleapis-folder>
```

Go to client root directory and generate the configs file as shown below.

```
cd hello-grpc-react
protoc -I. hello.proto -I$GOOGLEAPIS_DIR --js_out=import_style=commonjs,binary:src/middleware --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/middleware
```

Don't forget to add `/* eslint-disable */` at the beginning of both files.

## Usage

Run following commands in the project directory

- Install packages

```
npm start
```

- Run the web application

```
npm start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Run the web application

```
npm test
```

- Build the web application

```
npm run build
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

The project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the [LICENSE](LICENSE) file.
