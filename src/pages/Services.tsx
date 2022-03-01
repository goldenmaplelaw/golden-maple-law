import * as React from "react";

import { Container, Row, Col } from "react-bootstrap";

import BlockHeading from "../components/content/BlockHeading";
import ImgCTA from "../components/CTAs/ImgCTA";
import Tile from "../components/misc/Tile";
import IconTile from "../components/misc/IconTile";
import ButtonGroup from "../components/buttons/ButtonGroup";

import "../index.scss";
import Layout from '../layout/Layout';

// markup
const Services = () => {
  return (
    <Layout>
      <>
        <Container className="services">
          <Row>
            <BlockHeading textString="Our Services" />
          </Row>
          <Row>
            <Col md={4}>
              <IconTile imgName="international-icon" title="Immigration Law"/>
            </Col>
            <Col md={4}>
              <IconTile imgName="buisness-icon" title="Business Law"/>
            </Col>
            <Col md={4}>
              <IconTile imgName="invest-icon" title="Investment Law"/>
            </Col>
          </Row>
          <Row>
            <ButtonGroup 
              priButtonText="Get Started"
              priButtonPath="mailto:pushkar.prehar@goldenmaplelaw.com"
              secButtonText="Book Meeting"
              secButtonPath="mailto:pushkar.prehar@goldenmaplelaw.com"
            />
          </Row>
        </Container>
        <ImgCTA
          imgName="office-working"
          title="Take your life where you want to go."
          subTitle="Our team is dedicated to our mission of connecting people globally and our vision of making the immigration process easier. If you’re interested in working with a team of legal exports, then we’re here to help start your new life."
          primaryBtn="Contact"
          primaryBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
        />
        <BlockHeading textString="See how people are using our services." />
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

export default Services;
