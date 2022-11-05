import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CalendarDay from '../CalendarDay/CalendarDay';
import CustomModal from '../CustomModal/CustomModal';

import { useState } from 'react';

import './Calendar.css';

function Calendar() {
  const [showModal, setShowModal] = useState(false);

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
  
  const cols = 7;
  const rows = Math.round((currDaysInMonth + firstDayOfMonth) / cols);
  var calendarArr = [];
  var dayCounter = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      var d = (j + (cols * i) >= firstDayOfMonth && dayCounter <= currDaysInMonth) ? dayCounter : "";
      calendarArr.push(d);
      if (d > 0) {
        dayCounter++;
      }
    }
  }

  return (
    <Card className="calendar-card">
      <CustomModal onHide={() => setShowModal(false)} show={showModal} />
      <Card.Title>{month}</Card.Title>
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
