import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contraction0_img from '../images/contraction0_img.JPG';
import contraction1_img from '../images/contraction1_img.JPG';

function ContractVerbs() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Contraction only occurs in the present system</h5>
          </div>
          <img
            className="imageBorder"
            src={ contraction0_img }
            alt="contraction0_img"
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
            src={ contraction1_img }
            alt="contraction1_img"
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

export default ContractVerbs;
