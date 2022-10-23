import Card from 'react-bootstrap/Card';

import './CalendarDay.css';

function CalendarDay(props) {

  const date = props.date;

  return (
    <Card className="calendar-day-card">
      <Card.Title className="">{date}</Card.Title>
      <Card.Body className="">Hello World</Card.Body>
    </Card>
  );
}

export default CalendarDay;
