import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import interrogative_and_indefinite_pronouns0_img from '../images/interrogative_and_indefinite_pronouns0_img.JPG';
import interrogative_and_indefinite_pronouns1_img from '../images/interrogative_and_indefinite_pronouns1_img.JPG';

function InterrogativeAndIndefinitePronouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ interrogative_and_indefinite_pronouns0_img }
            alt="interrogative_and_indefinite_pronouns0_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ interrogative_and_indefinite_pronouns1_img }
            alt="interrogative_and_indefinite_pronouns1_img"
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

export default InterrogativeAndIndefinitePronouns;
