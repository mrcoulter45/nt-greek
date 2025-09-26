import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import verbs_img from '../images/verbs_img.PNG';

function Verbs() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ verbs_img }
            alt="verbs_img"
            style={{
              width: '1600px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>Verbs agree with their subject in number and person</li>
            </ul>
          </div>
          <div className="textBox">
            <h5>Parsing Procedure</h5>
            <ul>
              <li>Tense</li>
              <li>Voice</li>
              <li>Mood</li>
              <li>Person</li>
              <li>Number</li>
              <li>Source - Eg. "Present Active Indicative, 1st Person Singular" - Vocabulary Form</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Verbs;
