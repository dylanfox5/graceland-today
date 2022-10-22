import Card from 'react-bootstrap/Card';
import './WeekDay.css';

function WeekDay() {
  return (
    <Card className="day-card">
      <Card.Body>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default WeekDay;