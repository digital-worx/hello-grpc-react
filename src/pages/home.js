import logo from './logo.svg';
import dwlogo from './dw-logo.png';
import './home.css';
import { Button } from "../components/button";
import grpcClient from "../middleware/grpc";
import { useHistory } from "react-router-dom";

const { Status, HelloRequest } = require('../middleware/hello_pb');

function Home() {
  const history = useHistory();
  function getStatus() {
    const status = new Status();
    //data.setData('Hello World!');
    //const metadata = { 'custom-header-1': 'value1' };
    grpcClient.getStatus(status, {}, (err, response) => {
      console.log(response)
      history.push({
        pathname: '/response',
        state: { status: response.array[0] }
      });

    });
  }

  function helloServer() {
    const hReq = new HelloRequest();
    hReq.setName('gRPC React client')
    grpcClient.helloServer(hReq, {}, (err, response) => {
      console.log(response)
      history.push({
        pathname: '/response',
        state: { message: response.array[0] }
      });

    });
  }
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={dwlogo} alt="logo" />
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>
          Hello gRPC React Client
        </h1>
        <div className="grid-container">
          <div>
            <Button
              description="GetStatus"
              onClick={() => {
                getStatus();
              }}
            />
          </div>
          <div>
            <Button
              description="HelloServer"
              onClick={() => {
                helloServer();
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
