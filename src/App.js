import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import graceland from './img/graceland.png';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid className="App">
      <Row className="vh-100">
        <Col sm={12} lg={3} className="border middle">
          <Card className="today-card">
            <Card.Header>
              <Card.Text as="h1" className="date-num">
                26
              </Card.Text>
              <Card.Text as="h4" className="date-day-year">
                Monday, SEP
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={graceland} className="graceland" />
          </Card>
        </Col>
        <Col sm={12} lg={9} className="border">
          <Row className="border">
            <Col sm={12} lg={2} className="border">
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
            <Col sm={12} lg={2} className="border">
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
            <Col sm={12} lg={2} className="">
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
            <Col sm={12} lg={2} className="">
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
            <Col sm={12} lg={2} className="">
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
            <Col sm={12} lg={2} className="">
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
            <Col sm={12} lg={2} className="">
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
          <Row className="border">
            <Col>
            
            </Col>
            <Col>
            
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
