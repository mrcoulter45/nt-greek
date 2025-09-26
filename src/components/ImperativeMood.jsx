import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imperative_mood0_img from '../images/imperative_mood0_img.JPG';
import imperative_mood1_img from '../images/imperative_mood1_img.JPG';

function ImperativeMood() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Notes</h5>
            <ul>
              <li>The imperative mood reflects the attitude of the person doing the verb</li>
              <li>Present imperative denotes progressive action</li>
              <li>Aorist imperative denotes punctiliar action</li>
            </ul>
          </div>
          <img
            className="imageBorder"
            src={ imperative_mood0_img }
            alt="imperative_mood0_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ imperative_mood1_img }
            alt="imperative_mood1_img"
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

export default ImperativeMood;
