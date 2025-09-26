import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import relative_pronoun_img from '../images/relative_pronoun_img.JPG';

function RelativePronoun() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>Relative pronoun agrees with its antecedent in gender, number, and person, but has its own case in its own clause</li>
            </ul>
          </div>
          <img
            className="imageBorder"
            src={ relative_pronoun_img }
            alt="relative_pronoun_img"
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

export default RelativePronoun;
