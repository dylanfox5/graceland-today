import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CalendarDay from '../CalendarDay/CalendarDay';

import './Calendar.css';

function Calendar() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[new Date().getMonth()];

  return (
    <Card className="calendar-card">
      <Card.Title>{month}</Card.Title>
      <Card.Body>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Row className="mb-3">
            {Array.from({ length: 7 }).map((_, idx) => (
              <Col>
                <CalendarDay />
              </Col>
            ))}
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Calendar;
