import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import genitive_of_comparison_img from '../images/genitive_of_comparison_img.JPG';

function GenitiveOfComparison() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ genitive_of_comparison_img }
            alt="genitive_of_comparison_img"
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

export default GenitiveOfComparison;
