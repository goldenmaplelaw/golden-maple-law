import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const Blog = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="Investment-page-wrapper">
                Golden Maple Law Investment Services Section
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Blog;