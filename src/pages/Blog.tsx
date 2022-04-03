import * as React from "react"; 

import { Container, Row, Col } from "react-bootstrap";

import Tile from "../components/misc/Tile";
import FullCTA from "../components/CTAs/FullCTA";

import Layout from '../layout/Layout';

const Blog = () => {
    return (
      <Layout>
        <>
          <FullCTA 
            title="Legal Blog Articles"
          />
          <Container className="service-tiles">
            <Row>
              <Col md={4}>
                <Tile 
                  subject="Article"
                  title="Judicial Review – Federal Court – Visa Refusal"
                  subText="Golden Maple Law LLP, was retained by a client who had been unsuccessful once before in making an application for a Temporary Resident Visa (“TRV” or “visitor visa”) on their own, for assistance in filing another TRV application."
                  linkBtn="Read full article"
                  linkBtnPath="/blog/judicial-review/"
                />
              </Col>
              <Col md={4}>
                <Tile
                  subject="Article" 
                  title="Study Permits from India"
                  subText="On receipt of a letter of acceptance from a school in Canada, the most common challenge that applicant’s face is refusal of study visa."
                  linkBtn="Read full article"
                  linkBtnPath="/blog/study-permits-india/"
                />
              </Col>
              <Col md={4}>
                <Tile
                  subject="Article" 
                  title="Artificial Intelligence in IRCC"
                  subText="It is admitted by IRCC that Artificial Intelligence is implemented for Temporary Resident Visas (‘TRVs’), specifically in China and India."
                  linkBtn="Read full article"
                  linkBtnPath="/blog/artificial-intel-IRCC/"
                />
              </Col>
            </Row>
          </Container>
        </>
      </Layout>
    )
}

export default Blog;