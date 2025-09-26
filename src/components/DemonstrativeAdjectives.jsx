import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import demonstrative_adjectives_img from '../images/demonstrative_adjectives_img.JPG';

function DemonstrativeAdjectives() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ demonstrative_adjectives_img }
            alt="demonstrative_adjectives_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>Demonstrative adjectives always stand in non-sequential position when they modify nouns</li>
              <ul>
                <li>Eg. "(Dem. Adj.) (article) (noun)"</li>
              </ul>
            </ul>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Demonstrative Adjectives</h5>
            <ul>
              <li>this</li>
              <li>that</li>
              <li>near</li>
              <li>far</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DemonstrativeAdjectives;
