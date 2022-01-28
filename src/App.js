import React from 'react';
import './assets/css/App.css';
import Telemetry from './component/telemetry';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Connector } from './lib/mqtt_hooks';
import { Connector } from 'mqtt-reactjs-hooks';

function App(props) {
  return (
    <Connector brokerUrl='ws://test.mosquitto.org:1884'>
      <Container>
        <Row>
          <Telemetry />
        </Row>
      </Container>
    </Connector>
  );
}

export default App;
