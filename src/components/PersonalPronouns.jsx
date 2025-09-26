import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personal_pronoun_1st_img from '../images/personal_pronoun_1st_img.JPG';
import personal_pronoun_2nd_img from '../images/personal_pronoun_2nd_img.JPG';
import personal_pronoun_3rd_img from '../images/personal_pronoun_3rd_img.JPG';

function PersonalPronouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ personal_pronoun_1st_img }
            alt="personal_pronoun_1st_img"
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
            src={ personal_pronoun_2nd_img }
            alt="personal_pronoun_2nd_img"
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
            src={ personal_pronoun_3rd_img }
            alt="personal_pronoun_3rd_img"
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
              <li>A pronoun stands in place of a noun</li>
              <li>The case of a pronoun determines its grammatical function</li>
              <li>Pronouns agree with their antecedent in gender, number, and person</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalPronouns;
