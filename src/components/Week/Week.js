import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeekDay from '../WeekDay/WeekDay';
import './Week.css';

function Week() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return (
    <Row>
      {days.map((day) => 
        <Col className="">
          <Row className="center day">
            <h5>{day}</h5>
          </Row>
          <Row className="center">
            <WeekDay />
          </Row>
        </Col>
      )}
    </Row>
  );
}
export default Week;