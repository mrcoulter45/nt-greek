import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pas0_img from '../images/pas0_img.JPG';
import pas1_img from '../images/pas1_img.JPG';

function Pas() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ pas0_img }
            alt="pas0_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ pas1_img }
            alt="pas1_img"
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

export default Pas;
