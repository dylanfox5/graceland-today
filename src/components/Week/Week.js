import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeekDay from '../WeekDay/WeekDay';
import './Week.css';

function Week() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var today = new Date();
  var week = [];

  for (let i = 0; i < 7; i++) {
    var day = today.getDate() - today.getDay() + i;
    week.push(day);
  }

  return (
    <Row>
      {days.map((day, index) =>
        <Col>
          <Row className="center day">
            <h5>
              {day}
            </h5>
          </Row>
          <Row className="center">
            <WeekDay date={week[index]} />
          </Row>
        </Col>
      )}
    </Row>
  );
}
export default Week;