import * as React from "react";
import { Container } from "react-bootstrap";

import { TextBlock, LinkBlock } from "../components";

import Layout from '../layout/Layout';

const Disclaimer = () => {
  return (
    <Layout>
      <>
        <Container className="disclaimer">
          <h1>Legal Disclaimer</h1>
          <TextBlock textString="Our Web site provides general information on immigration matter and should not be relied upon as legal advice." className="bold-text"/>
          <TextBlock textString="If you require legal advice, you should retain qualified legal professionals to advise you in the context of your particular circumstances. If you would like to retain Golden Maple Law LLP to give you legal advice, please telephone, email or write to any of our lawyers, who will be pleased to discuss whether or not our firm can assist you." />
        </Container>
      </>
    </Layout>
  )
}

export default Disclaimer;