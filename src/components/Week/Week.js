import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeekDay from '../WeekDay/WeekDay';
import './Week.css';
import { daysOfWeek, today } from '../../constants/constants';

function Week() {
  var week = [];
  for (let i = 0; i < 7; i++) {
    var day = today.getDate() - today.getDay() + i;
    if (day < 1) {
      day = new Date(today.getFullYear(), today.getMonth(), 0).getDate() + day;
    }
    week.push(day);
  }

  return (
    <Row>
      {daysOfWeek.map((day, index) =>
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