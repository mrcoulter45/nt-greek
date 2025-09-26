import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import εἰμί_img from '../images/εἰμί_img.JPG';
import εἰμί_present_active_participle_img from '../images/εἰμί_present_active_participle_img.JPG';

function Eiui() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ εἰμί_img }
            alt="εἰμί_img"
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
            src={ εἰμί_present_active_participle_img }
            alt="εἰμί_present_active_participle_img"
            style={{
              width: '500px',
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
              <li>εἰμί takes a nominative, called a predicate nominative, as a direct object</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Eiui;

// future middle indicative
