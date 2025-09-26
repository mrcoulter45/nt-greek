import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import verbs_in_ui0 from '../images/verbs_in_ui0.JPG';
import verbs_in_ui1 from '../images/verbs_in_ui1.JPG';
import verbs_in_ui2 from '../images/verbs_in_ui2.JPG';
import verbs_in_ui3 from '../images/verbs_in_ui3.JPG';
import verbs_in_ui4 from '../images/verbs_in_ui4.JPG';
import verbs_in_ui5 from '../images/verbs_in_ui5.JPG';

function VerbsInUi() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ verbs_in_ui0 }
            alt="verbs_in_ui0"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ verbs_in_ui1 }
            alt="verbs_in_ui1"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ verbs_in_ui2 }
            alt="verbs_in_ui2"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ verbs_in_ui3 }
            alt="verbs_in_ui3"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ verbs_in_ui4 }
            alt="verbs_in_ui4"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ verbs_in_ui5 }
            alt="verbs_in_ui5"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default VerbsInUi;
