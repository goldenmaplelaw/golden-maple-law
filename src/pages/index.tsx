import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockHeading from "../components/content/BlockHeading";
import FullCTA from "../components/CTAs/FullCTA";
import ImgCTA from "../components/CTAs/ImgCTA";
import Hero from "../components/Hero";
import Tile from "../components/misc/Tile";

import "../index.scss";
import Layout from '../layout/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <>
        <Hero 
          imgName="humber-river"
          title="Connecting People Globally"
          subTitle="Toronto immigration lawyers you can trust."
        />
        <FullCTA 
          title="Making the immigration process easier. So you can focus on life."
          buttons
          primaryBtn="Why Golden Maple?"
          secondaryBtn="Our Story"
        />
        <ImgCTA
          imgName="office-laptop"
          title="Canadian immigration lawyers"
          subTitle="Domain expertise and empathy is what drives our clients’ success. Golden Maple Law is committed to listening to each unique case and situation to meet the changing needs of your business and family."
          primaryBtn="Our Services"
          primaryBtnPath="/Services/"
        />
        <BlockHeading textString="See how people are using our Services." />
        <Container className="service-tiles">
          <Row>
            <Col md={4}>
              <Tile 
                subject="Services"
                title="Immigration Law"
                subText="Golden Maple Law is committed to making your immigration process smoother with services in permanent and temporary residence applications, admissibility matters, as well as citizenship applications. In cases of refused applications or delayed responses, we can help appeal the Immigration & Refugee Board, as well as provide judicial reviews to the Federal Court."
                linkBtn="Contact Us"
                linkBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
              />
            </Col>
            <Col md={4}>
              <Tile
                subject="Services" 
                title="Business and Real Estate Advisory"
                subText="Our team provides business and real estate legal consultation with respect to business immigration programs. Our team is connected with and resources Shapiro Real Estate & Business Lawyers on transactional matters."
                linkBtn="Contact Us"
                linkBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
              />
            </Col>
            <Col md={4}>
              <Tile
                subject="Services" 
                title="Cross-Border Transactions"
                subText="Golden Maple Law is focused on our mission of connecting people globally. Our team provides services to people currently residing in India, China, and Iran (and surrounding geographic areas such as Dubai, the UAE, and Turkey)."
                linkBtn="Contact Us"
                linkBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
              />
            </Col>
          </Row>
        </Container>
      </>
    </Layout>
  )
}

export default IndexPage
