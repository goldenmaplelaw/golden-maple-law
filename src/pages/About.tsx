import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const About = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="about-page-wrapper">
                Golden Maple Law About Section
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default About;