import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CalendarDay from '../CalendarDay/CalendarDay';

import './Calendar.css';

function Calendar() {
  const today = new Date();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNum = today.getMonth();
  const month = months[monthNum];

  const year = today.getFullYear();

  const getDaysInMonth = (month, year) => {
    return new Date(year, month+1, 0).getDate();
  };
  const currDaysInMonth = getDaysInMonth(monthNum, year);
  const firstDayOfMonth = new Date(year, monthNum, 1).getDay();
  
  var dayCounter = 1;

  return (
    <Card className="calendar-card">
      <Card.Title>{month}</Card.Title>
      <Card.Body>
        {Array.from({ length: 6 }).map((_, index) => (
          <Row className="mb-3">
            {Array.from({ length: 7 }).map((_, idx) => (
              <Col>
                <CalendarDay date={idx+(7*index) >= firstDayOfMonth && dayCounter <= currDaysInMonth ? dayCounter++ : ""} />
              </Col>
            ))}
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Calendar;
