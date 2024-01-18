import * as React from "react"; 
import {Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import Layout from '../layout/Layout';
import BlockHeading from "../components/content/BlockHeading";
import IconTile from "../components/misc/IconTile";

const Contact = () => {
    return (
      <Layout>
        <div className="contact">
          <Hero 
            imgName="contact-us"
            title="Let's discuss your case."
            subTitle="Contact our team of legal professionals."
          /> 
          <Container className="office-contact">
              <Row>
                <BlockHeading textString="Toronto Office" />
              </Row>
              <Row>
                <Col md={12}>
                  <IconTile imgName="international-icon" title="333 Sheppard Ave East, Suite 210 Toronto, ON  M2N 3B3"/>
                </Col>
                <Col md={12} className="hide-title">
                  <IconTile imgName="phone-solid" link linkPath="tel:416-323-7292" linkString="TEL: 416-323-7292" title="TEL: 416-323-7292"/>
                </Col>
                <Col md={12} className="hide-title">
                  <IconTile imgName="email-solid" link linkPath="mailto:admin@goldenmaplelaw.com" linkString="EMAIL: admin@goldenmaplelaw.com" title="EMAIL: admin@goldenmaplelaw.com"/>
                </Col>
              </Row>
          </Container> 
          {/* <Container className="office-contact">
              <Row>
                <BlockHeading textString="India Office" />
              </Row>
              <Row>
                <Col md={12}>
                  <IconTile imgName="international-icon" title="J-207, The Vilas, DLF Phase 2, Gurugram, Haryana, India 122002"/>
                </Col>
                <Col md={12} className="hide-title">
                  <IconTile imgName="phone-solid" link linkPath="tel:91-921-2317321" linkString="TEL: +91-921-2317321" title="TEL: +91-921-2317321"/>
                </Col>
                <Col md={12} className="hide-title">
                  <IconTile imgName="email-solid" link linkPath="mailto:admin@goldenmaplelaw.com" linkString="EMAIL: admin@goldenmaplelaw.com" title="EMAIL: admin@goldenmaplelaw.com"/>
                </Col>
              </Row>
          </Container> */}
        </div>
      </Layout>
    )
}

export default Contact;