import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gen_abs from '../images/gen_abs.JPG';
import gen_abs_ex0 from '../images/gen_abs_ex0.JPG';
import gen_abs_ex1 from '../images/gen_abs_ex1.JPG';

function GenitiveAbsolute() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ gen_abs }
            alt="gen_abs"
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
            src={ gen_abs_ex0 }
            alt="gen_abs_ex0"
            style={{
              width: '1500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ gen_abs_ex1 }
            alt="gen_abs_ex1"
            style={{
              width: '1500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default GenitiveAbsolute;
