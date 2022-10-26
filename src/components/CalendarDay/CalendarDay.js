import Card from 'react-bootstrap/Card';

import './CalendarDay.css';

function CalendarDay(props) {

  const date = props.date;

  return (
    <Card className="calendar-day-card">
      <Card.Title>{date}</Card.Title>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default CalendarDay;
