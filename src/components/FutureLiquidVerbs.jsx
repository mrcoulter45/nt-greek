import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fut_liquid_verbs_img from '../images/fut_liquid_verbs_img.JPG';

function FutureLiquidVerbs() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ fut_liquid_verbs_img }
            alt="fut_liquid_verbs_img"
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

export default FutureLiquidVerbs;
