import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodayBanner from './components/TodayBanner/TodayBanner';
import Week from './components/Week/Week';
import CustomAccordion from "./components/CustomAccordion/CustomAccordion";
import Calendar from "./components/Calendar/Calendar";

import "./firebaseConfig";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid className="App">
      <Row className="vh-100">
        <Col sm={12} lg={2} className="middle">
          <TodayBanner />
        </Col>
        <Col sm={12} lg={10}>
          <Row>
            <Col>
              <Week />
            </Col>
          </Row>
          <Row>
            <Col className="middle">
              <Calendar />
            </Col>
            <Col className="middle">
              <CustomAccordion />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
