import { Card, Container } from 'react-bootstrap';
import ReactJson from 'react-json-view';
// import { useMqttState, useSubscription } from '../lib/mqtt_hooks';
import { useMqttState, useSubscription } from 'mqtt-reactjs-hooks';

export default function Telemetry() {
  const { connectionStatus } = useMqttState();

  let topic = '';
  let payload = {};
  const { message } = useSubscription(['telemetry/#']);
  if (message) {
    topic = message.topic;
    payload = JSON.parse(message.message);
  }

  return (
    <Container>
      <Card style={{ marginTop: '40px' }}>
        <Card.Header>Connection Status : {connectionStatus}</Card.Header>
        <Card.Title style={{ padding: '20px' }}>Topic: {topic}</Card.Title>
        <Card.Body>
          <ReactJson src={payload} />
        </Card.Body>
      </Card>
    </Container>
  );
}
