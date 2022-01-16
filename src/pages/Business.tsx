import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const Business = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="Business-page-wrapper">
                Golden Maple Law Business Services Section
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Business;