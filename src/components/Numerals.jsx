import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import numerals_img from '../images/numerals_img.JPG';
import numerals_3_and4_img from '../images/numerals_3_and4_img.JPG';

function Numerals() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ numerals_img }
            alt="numerals_img"
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
            src={ numerals_3_and4_img }
            alt="numerals_3_and4_img"
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

export default Numerals;
