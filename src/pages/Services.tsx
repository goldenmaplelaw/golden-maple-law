import * as React from "react";

import { Container, Row, Col, ListGroup } from "react-bootstrap";

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
                subText="Golden Maple Law is focused on our mission of connecting people globally. Our team provides services to people currently residing in India, China, Korea, Ukraine, and Iran (and surrounding geographic areas such as Dubai, the UAE, and Turkey)."
                linkBtn="Contact Us"
                linkBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
              />
            </Col>
          </Row>
        </Container>
     
        <Container className="service-title">
          <BlockHeading textString="Our team is here to help." /> 
              <Row>
                    <ButtonGroup 
                      priButtonText="Get Started"
                      priButtonPath="mailto:pushkar.prehar@goldenmaplelaw.com"
                      secButtonText="Book Meeting"
                      secButtonPath="mailto:pushkar.prehar@goldenmaplelaw.com"
                    />
                  </Row>
          <h2>Looking to study, work, or immigrate to Canada? Our team can provide you with temporary or permanent residence applications, as well as appeals and inadmissibility services.</h2>
        </Container>

      <Container className="service-list">
        <h3>Permanent Resident Applications</h3>
          <ul>
              <li>Economic Classes</li>
              <li>Startup-visa</li>
              <li>Express Entry</li>
              <li>Quebec immigration</li>
              <li>Humanitarian and Compassionate Applications</li>
              <li>International adoptions</li>
              <li>Caregivers</li>
          </ul>
          
          <h3> Admissibility Matters</h3>
          <ul>
              <li>Admissibility Hearings and Appeals</li>
              <li>Misrepresentation</li>
              <li>Procedural Fairness Letters</li>
              <li>Removal Orders</li>
              <li>Criminal Inadmissibility</li>
          </ul>

          <h3>Temporary Resident Applications and Extensions</h3>
          <ul>
            <li>Temporary Resident Visas</li>
            <li>Study Permits</li>
            <li>Work Permits</li>
            <li>Visitor Visas and Visitor Records</li>
            <li>Extensions and Restoration Applications</li>
          </ul>

          <h3>Removals and Deportations</h3>
          <ul>
            <li>Removal Orders</li>
            <li>Removal Order Appeals</li>
            <li>Residency Obligations Appeals</li>
            <li>Deferral Request to CBSA</li>
            <li>Stays of Removal (Federal Court)</li>
          </ul>

          <h3>Citizenship</h3>
          <ul>
            <li>Citizenship Applications Grants</li>
            <li>Federal Court Citizenship Matters</li>
            <li>Loss of Citizenship</li>
            <li>Passport Issues</li>
          </ul>

          <h3>Refugees</h3>
          <ul>
            <li>Basis of Claims Forms</li>
            <li>Refugee Protection Hearings</li>
            <li>Refugee Appeals</li>
            <li>Loss of Refugee Status</li>
            <li>Overseas Resettlement Applications</li>
          </ul>
        </Container>
      </>
    </Layout>
  )
}

export default Services;
