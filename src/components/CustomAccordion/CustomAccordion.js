import Accordion from 'react-bootstrap/Accordion';
import './CustomAccordion.css';
import ListGroup from 'react-bootstrap/ListGroup';

import { announcements } from "../../firebaseConfig";
import { orgs, organizations } from "../../constants/constants";

function CustomAccordion() {
  return (
    <Accordion>
      {Object.keys(organizations).map((org, index) => 
        <Accordion.Item eventKey={index}>
          <Accordion.Header className={organizations[org].abbr}>{organizations[org].title}</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              {announcements[organizations[org].title]["announcements"].map((ann, _idx) => 
                <ListGroup.Item>{ann}</ListGroup.Item>
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  );
}
export default CustomAccordion;