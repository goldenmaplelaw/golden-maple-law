import * as React from "react"; 
import { Container, Row, Col, Image } from "react-bootstrap";

import { TextBlock } from "../../components";
import { FullCTA } from "../../components";
import { PrimaryButton } from "../../components";
import Layout from '../../layout/Layout';

const JudicialReview = () => {
  return (
    <Layout>
      <>
        <Container className="article-wrapper">
          <Row>
            <Col md={12}>
              <h1>Judicial Review – Federal Court – Visa Refusal</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{span:10, offset:1}}>
              <Image src={'/court.png'} className="blog-img" />
            </Col>
          </Row>
          <TextBlock textString="Golden Maple Law LLP, was retained by a client who had been unsuccessful once before in making an application for a Temporary Resident Visa (“TRV” or “visitor visa”) on their own, for assistance in filing another TRV application. After carefully reviewing our client’s immigration history and reasons for the previous refusal, we submitted a new TRV application being sure to address all previously indicated reasons for refusal on the first TRV application."/>
          <TextBlock textString="Much to our disappointment, the TRV application was not successful, though it appeared the Officer did not carefully consider all of the evidence our office and our client had provided.  On this basis, our client retained our office again to file an Application for Leave and for Judicial Review to challenge the refusal of their second TRV application. We carefully crafted legal arguments, relying on previous Federal Court decisions, to explain the Officer had not properly considered our submissions or the overwhelming evidence filed in support of the TRV application. After our arguments were filed, the Department of Justice, representing the Minister of Citizenship and Immigration, agreed to settle our client’s case, set aside the refusal and re-open our client’s second TRV application, without a fight! We are thrilled with this result, and wish our client the best!" />
          <FullCTA 
            title="Need legal assistance? Our team is here to help"
            buttons
            primaryBtn="More Articles"
            primaryBtnPath="/Blog/"
            secondaryBtn="Our Services"
            secondaryBtnPath="/Services/"
          />
        </Container>
      </>
    </Layout>
  )
}

export default JudicialReview;