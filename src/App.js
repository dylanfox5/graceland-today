import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import TodayBanner from './components/TodayBanner/TodayBanner';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid className="App">
      <Row className="vh-100">
        <Col sm={12} lg={2} className="middle">
          <TodayBanner />
        </Col>
        <Col sm={12} lg={10} className="">
          <Row className="">
            <Col className="">
              <Row className="center day">
                <h5>Sunday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Monday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Tuesday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Wednesday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Thursday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Friday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col className="">
              <Row className="center day">
                <h5>Saturday</h5>
              </Row>
              <Row className="center">
                <Card className="day-card">
                  <Card.Body>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <Card className="calendar-card">

              </Card>
            </Col>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ASC</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>CHC</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>COSA</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>IDEA</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>IMs</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Senate</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
