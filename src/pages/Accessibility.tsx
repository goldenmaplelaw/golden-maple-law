import * as React from "react"; 
import { Container } from "react-bootstrap";

import { TextBlock, LinkBlock } from "../components";

import Layout from '../layout/Layout';

const Accessibility = () => {
  return (
    <Layout>
      <>
        <Container className="accessibility">
          <h1>Accessibility</h1>
          <TextBlock textString="Golden Maple Law LLP is committed to treating all people in a way that allows them to maintain their dignity and independence."/>
          <TextBlock textString="We believe in integration and equal opportunity. We are committed to meeting the needs of persons with disabilities in a timely manner, and will do so by preventing and removing barriers to accessibility and meeting accessibility requirements under the Accessibility for Ontarians with Disabilities Act, 2005." />
          <TextBlock textString="Feedback Process:  Comments and feedback about the delivery of services to persons with disabilities are welcome, as it may help identify areas that require change and assist in continuous improvement. Feedback will be addressed immediately. Some feedback may require more effort to address and may need to be reviewed in detail." />
          <TextBlock textString="To provide feedback or suggestions please contact us using any of the following methods:" />
          <LinkBlock method="Email" linkString="mailto:admin@goldenmaplelaw.com" textString="admin@goldenmaplelaw.com" />
          <LinkBlock method="By Phone" linkString="tel:647-509-0893" textString="Call at 647-509-0893" />
          <TextBlock textString="In Writing:  Golden Maple Law LLP, 333 Sheppard Avenue East, Suite 210, Toronto, Ontario M2N 3B3" />
        </Container>
      </>
    </Layout>
  )
}

export default Accessibility;