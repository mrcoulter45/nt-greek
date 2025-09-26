import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import first_declension_perf_alpha_img from '../images/first_declension_perf_alpha_img.JPG';
import first_declension_imperf_alpha_img from '../images/first_declension_imperf_alpha_img.JPG';
import first_declension_perf_eta_img from '../images/first_declension_perf_eta_img.JPG';
import './Styles.css';

function FirstDeclension() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div>
            <h5 className="centerText">Perfect Alpha</h5>
            <img
              className="imageBorder"
              src={ first_declension_perf_alpha_img }
              alt="first_declension_perf_alpha_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
        </Col>
        <Col md="auto">
          <div>
            <h5 className="centerText">Imperfect Alpha</h5>
            <img
              className="imageBorder"
              src={ first_declension_imperf_alpha_img }
              alt="first_declension_imperf_alpha_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
        </Col>
        <Col md="auto">
          <div>
            <h5 className="centerText">Perfect Eta</h5>
            <img
              className="imageBorder"
              src={ first_declension_perf_eta_img }
              alt="first_declension_perf_eta_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstDeclension;
