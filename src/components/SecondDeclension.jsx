import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import second_declension_masc_img from '../images/second_declension_masc_img.JPG';
import second_declension_neuter_img from '../images/second_declension_neuter_img.JPG';
import './Styles.css';

function SecondDeclension() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div>
            <h5 className="centerText">Masculine</h5>
            <img
              className="imageBorder"
              src={ second_declension_masc_img }
              alt="second_declension_masc_img"
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
            <h5 className="centerText">Neuter</h5>
            <img
              className="imageBorder"
              src={ second_declension_neuter_img }
              alt="second_declension_neuter_img"
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

export default SecondDeclension;
