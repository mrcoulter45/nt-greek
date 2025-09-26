import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import general_rules_of_accent_img from '../images/general_rules_of_accent_img.JPG';
import rule_of_verb_accent_img from '../images/rule_of_verb_accent_img.JPG';
import rule_of_noun_accent_img from '../images/rule_of_noun_accent_img.JPG';

function Accent() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ general_rules_of_accent_img }
            alt="general_rules_of_accent_img"
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
            src={ rule_of_verb_accent_img }
            alt="rule_of_verb_accent_img"
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
            src={ rule_of_noun_accent_img }
            alt="rule_of_noun_accent_img"
            style={{
              width: '500px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="textBox">
            <h5>Words With Two Accent Marks</h5>
            <ul>
              <li>1 John 3:7 - "... τὴν δικαιοσύνην δίκαιός ἐστι ..."</li>
              <ul>
                <li>This is because the following "ἐστι" has no accent mark. Greek requires an accent every 3rd syllable, and ἐστι</li>
              </ul>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Accent;
