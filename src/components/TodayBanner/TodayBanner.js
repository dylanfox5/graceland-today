import Card from 'react-bootstrap/Card';
import graceland from '../../img/graceland.png';
import './TodayBanner.css';

function TodayBanner() {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, '0');
  const day = today.getDay();
  const month = today.getMonth();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return (
    <Card className="today-card">
      <Card.Header>
        <Card.Text as="h1" className="date-num">
          {date}
        </Card.Text>
        <Card.Text as="h4" className="date-day-year">
          {daysOfWeek[day] + ", " + months[month]}
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={graceland} className="graceland" />
    </Card>
  );
}
export default TodayBanner;