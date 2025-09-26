import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import participles0_img from '../images/participles0_img.JPG';
import participles1_img from '../images/participles1_img.JPG';
import participles2_img from '../images/participles2_img.JPG';
import participles3_img from '../images/participles3_img.JPG';
import participles4_img from '../images/participles4_img.JPG';
import participles5_img from '../images/participles5_img.JPG';
import participles6_img from '../images/participles6_img.JPG';

function Participles() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ participles0_img }
            alt="participles0_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ participles1_img }
            alt="participles1_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            className="imageBorder"
            src={ participles2_img }
            alt="participles2_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ participles4_img }
            alt="participles4_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ participles3_img }
            alt="participles3_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ participles5_img }
            alt="participles5_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
        <Col>
          <img
            className="imageBorder"
            src={ participles6_img }
            alt="participles6_img"
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

export default Participles;
