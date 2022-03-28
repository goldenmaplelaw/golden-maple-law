import * as React from "react"; 
import { Container, Row, Col } from "react-bootstrap";

import { TextBlock, LinkBlock } from "../components";

import Layout from '../layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <>
        <Container className="privacy">
          <h1>Privacy</h1>
          <TextBlock textString="Our Privacy Promises" className="bold-text" />
          <TextBlock textString="We at Golden Maple Law LLP offer immigration legal services to individuals and corporations from a variety of countries around the world. Our dedicated team of lawyers and case analysts are committed to respecting your rights and obeying the law – explaining your privacy and data protection rights is important to us."/>
          <TextBlock textString="In this statement, we explain how we protect your personal information." />
          <TextBlock textString="Privacy and individuals" className="bold-text" />
          <TextBlock textString="This statement is about the rights of individuals. While we are also committed to protecting information about companies and other businesses we act for, this policy isn’t about them. When we act for individual clients, we always need personal information when we provide immigration legal services regardless of the type of matter." />
          <TextBlock textString="Our privacy commitments" />
          <Row>
            <Col md={{span:8, offset:2}}>
              <ul>
                <li>We are accountable for the information you give us.</li>
                <li>We will tell you why we need information when we ask for it.</li>
                <li>We will use your personal information only for that purpose, or as the law requires.</li>
                <li>We do not sell your information.</li>
                <li>We keep your information safe.</li>
                <li>We take security seriously.</li>
              </ul>
            </Col>
          </Row>
          <TextBlock textString="The work that we do generally requires that your information will be shared with a third party. Your application may be submitted to various government departments, courts, tribunals and government agencies. If the work that we are doing requires us to involve others, we will tell you. " />
          <TextBlock textString="If you want to know what personal data we have about you, please ask us – we will tell you unless the law prevents us doing so." />
          <TextBlock textString="If you ask us for marketing material or attend an event, we will keep your contact information in a database so that we can contact you in the future. If you don’t want this, please tell us and we will remove your name." />
          <TextBlock textString="Please talk to us" className="bold-text" />
          <TextBlock textString="Our privacy staff will answer any questions you may have. You can contact them at" />
          <LinkBlock method="Email" linkString="mailto:admin@goldenmaplelaw.com" textString="admin@goldenmaplelaw.com" />
          <TextBlock textString="PRIVACY POLICY" className="bold-text" />
          <TextBlock textString="Golden Maple Law LLP (“we“, “us” and “our“) is an independent entity. This is the Privacy Policy of Golden Maple Law LLP, which describes how it processes Personal Information." />
        </Container>
      </>
    </Layout>
  )
}

export default Privacy;