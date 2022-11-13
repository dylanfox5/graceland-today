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
      {/* <Accordion.Item eventKey="0">
        <Accordion.Header className="asc">ASC</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["Academic Student Council"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="chc">CHC</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["Council of House Chaplains"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="cosa">COSA</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["COSA"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="idea">IDEA</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["IDEA"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="ims">IMs</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["Intramurals"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className="sen">Senate</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {announcements["Senate"]["announcements"].map((ann, index) =>
              <ListGroup.Item>{ann}</ListGroup.Item>
            )}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  );
}
export default CustomAccordion;