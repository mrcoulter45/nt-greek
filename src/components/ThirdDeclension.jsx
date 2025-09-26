import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import third_declension_img from '../images/third_declension_img.JPG';
import third_declension_ua_img from '../images/third_declension_ua_img.JPG';
import third_declension0_img from '../images/third_declension0_img.JPG';
import third_declension1_img from '../images/third_declension1_img.JPG';
import third_declension2_img from '../images/third_declension2_img.JPG';
import third_declension3_img from '../images/third_declension3_img.JPG';
import third_declension4_img from '../images/third_declension4_img.JPG';

function ThirdDeclension() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ third_declension_img }
            alt="third_declension_img"
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
            src={ third_declension_ua_img }
            alt="third_declension_ua_img"
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
            src={ third_declension0_img }
            alt="third_declension0_img"
            style={{
              width: '490px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ third_declension1_img }
            alt="third_declension1_img"
            style={{
              width: '490px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ third_declension2_img }
            alt="third_declension2_img"
            style={{
              width: '490px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ third_declension3_img }
            alt="third_declension3_img"
            style={{
              width: '490px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <img
            className="imageBorder"
            src={ third_declension4_img }
            alt="third_declension4_img"
            style={{
              width: '490px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdDeclension;
