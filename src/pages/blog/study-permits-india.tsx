import * as React from "react"; 
import { Container, Row, Col } from "react-bootstrap";

import { TextBlock } from "../../components";

import Layout from '../../layout/Layout';

const StudyPermitsIndia = () => {
  return (
    <Layout>
      <>
        <Container className="article-wrapper">
          <Row>
            <Col md={{span:8, offset:2}}>
              <h1>Study Permits from India</h1>
            </Col>
          </Row>
          <TextBlock textString="On receipt of a letter of acceptance from a school in Canada, the most common challenge that applicant’s face is refusal of study visa."/>
          <TextBlock textString="This situation is the reality of more than half of the applicants who applied for a Canadian study permit in 2020 as Indian citizens. Based on data received from the Government of Canada for the period January 1, 2020 to November 30, 2020, approximately 57% of all study permit applications from India were refused. In comparison, the refusal rate for Indian citizens applying for study permits in 2019 was 36%." />
          <TextBlock textString="This is the reality, despite Indian residents being eligible for faster processing through the Student Direct Stream, with an (IRCC hopeful targeted) 20-day turnaround time, if they can fulfil certain requirements. These requirements include, but are not limited to: having a Guaranteed Investment Certificate (GIC) of CAD 10,000.00, being a resident outside of Canada when applying, presenting a letter of acceptance from a designated post-secondary learning institution, providing proof of payment of the first-year tuition, and scoring high on the English language test." />
          <TextBlock textString="Although the pandemic and its attendant travel restrictions played a role in the significant rise in Canadian study permit refusals for applications from India, misrepresentation findings involving Indian citizens also contributed to the drop in the number of accepted study permit applications. In Suri v. Canada (Citizenship and Immigration), 2020 FC 86, Justice Mason dismissed an application for judicial review, as the visa officer’s refusal to grant a study permit was reasonable because it was based on misrepresentation by the applicant." />
          <TextBlock textString="The recent case law pertaining to rejected study permit applications from India provides some useful insight. Critically, Indian citizens continue to submit, oftentimes misled by agents and consultants, false documents in their study permit applications." />
          <TextBlock textString="Submitting a fraudulent document that is material to the visa officer’s decision to approve or refuse your application—even if you were unaware that the document was fraudulent or if the document was not prepared by you—will almost always lead an officer to reject your study permit application on the ground of misrepresentation, which carries a five year ban on admissibility and eligibility for permanent residence (s.40 IRPA).  It is important for applicants to remember that they are ultimately responsible for all materials submitted in their study permit applications.  Applicants should also prepare their study plan with care and attention, as submitting a study plan that is vague, generalized, or inconsistent may result in a refusal. It is also important to assess your family ties in your home country. If you have weak family ties in the country where you hold citizenship or reside, an officer may reject your application as it could be an indicator that you will not return to your home country at the end of your stay. Officers are looking carefully at ‘push’ and ‘pull’ factors, those facts which lead you to want to leave India and those factors which draw you into Canada. Especially, if they stand out on the page, you may need to be proactive in addressing them.   However, we have also seen applications being granted for judicial review after a visa officer rejected the study permit application. Although a visa officer’s decision is owed a high level of deference by the court, they must comply with the standards of a reasonable decision: one that is based on an internally coherent and rational chain of analysis and that is justified in relation to the facts and law that constrain the decision maker (Vavilov). A visa officer must engage with the applicant’s evidence and base the explanation of why the application is being refused on an analysis of that evidence. For example, it would be necessary for an officer to explain why an applicant is not considered a bona fide student—and would thus not leave Canada at the end of their authorized stay—based on a single low test score in spoken English." />
        </Container>
      </>
    </Layout>
  )
}

export default StudyPermitsIndia;