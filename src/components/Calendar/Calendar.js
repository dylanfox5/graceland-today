import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CalendarDay from '../CalendarDay/CalendarDay';
import CustomModal from '../CustomModal/CustomModal';
import { monthOfYear, month, daysInCurrentMonth, firstDayOfMonth } from '../../constants/constants';

import { useState } from 'react';

import './Calendar.css';

function Calendar() {
  const [showModal, setShowModal] = useState(false);  
  const cols = 7;
  const rows = Math.round((daysInCurrentMonth + firstDayOfMonth) / cols);
  var calendarArr = [];
  var dayCounter = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      var d = (j + (cols * i) >= firstDayOfMonth && dayCounter <= daysInCurrentMonth) ? dayCounter : "";
      calendarArr.push(d);
      if (d > 0) {
        dayCounter++;
      }
    }
  }

  return (
    <Card className="calendar-card">
      <CustomModal onHide={() => setShowModal(false)} show={showModal} />
      <Card.Title>{monthOfYear}</Card.Title>
      <Card.Body>
        {Array.from({ length: rows }).map((_, index) => (
          <Row className="mb-3">
            {Array.from({ length: cols }).map((_, idx) => (
              <Col className="middle px-1">
                <CalendarDay date={calendarArr[idx + (cols * index)]} />
                <h5 onClick={() => setShowModal(true)} className="mobile-display">{calendarArr[idx + (cols * index)]}</h5>
              </Col>
            ))}
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Calendar;
