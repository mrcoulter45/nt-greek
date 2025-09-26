import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles.css';
import πιστεύω_img from '../images/πιστεύω_img.JPG';
import γράφω_second_aorist_passive_img from '../images/γράφω_second_aorist_passive_img.JPG';
import ἔρχομαι_img from '../images/ἔρχομαι_img.JPG';
import ἔρχομαι_2nd_aorist_active_ind_img from '../images/ἔρχομαι_2nd_aorist_active_ind_img.JPG';

function SpecialWords() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>πιστεύω</h5>
            <img
              className="imageBorder"
              src={ πιστεύω_img }
              alt="πιστεύω_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
          <div className="textBox">
            <h5>γράφω</h5>
            <img
              className="imageBorder"
              src={ γράφω_second_aorist_passive_img }
              alt="γράφω_second_aorist_passive_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
          <div className="textBox">
            <h5>ἔρχομαι</h5>
            <ul>
              <li>intransitive verb</li>
            </ul>
            <img
              className="imageBorder"
              src={ ἔρχομαι_img }
              alt="ἔρχομαι_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
            <p>2nd Aorist Active Indicative</p>
            <img
              className="imageBorder"
              src={ ἔρχομαι_2nd_aorist_active_ind_img }
              alt="ἔρχομαι_2nd_aorist_active_ind_img"
              style={{
                width: '500px',

                maxWidth: '100%',

                height: 'auto'
              }}
            />
          </div>
        </Col>
        <Col>
          <div className="textBox">
            <h5>ὁράω</h5>
          </div>
          <div className="textBox">
            <h5>μή</h5>
            <ul>
              <li>μή: not</li>
              <li>Used only in:</li>
              <ul>
                <li>present imperative</li>
                <li>aorist subjunctive</li>
              </ul>
            </ul>
          </div>
          <div className="textBox">
            <h5>ποιέω</h5>
            <ul>
              <li>"I am doing": used most of the time</li>
              <li>"I am making": used only when context makes sense</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialWords;
