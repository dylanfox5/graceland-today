import Card from 'react-bootstrap/Card';
import graceland from '../../img/graceland.png';
import './TodayBanner.css';

function TodayBanner() {
  return (
    <Card className="today-card">
      <Card.Header>
        <Card.Text as="h1" className="date-num">
          26
        </Card.Text>
        <Card.Text as="h4" className="date-day-year">
          Monday, SEP
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