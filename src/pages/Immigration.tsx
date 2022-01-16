import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const Immigration = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="Immigration-page-wrapper">
                Golden Maple Law Immigration Services Section
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Immigration;