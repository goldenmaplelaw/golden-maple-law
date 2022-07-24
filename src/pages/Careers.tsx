import * as React from "react"; 

import { Container } from "react-bootstrap";
import BlockHeading from "../components/content/BlockHeading";

import "../index.scss";
import Layout from '../layout/Layout';

const Careers = () => {
    return (
      <Layout>
        <div className="careers-page">
          <BlockHeading textString="Careers" />
          <Container className="career-copy">
              <h2>Join Us</h2>
              <p>At Golden Maple Law LLP, we work together as a team. We believe that team work is essential to providing our clients with the creative problem-solving that today's environment demands, and delivering the best-possible service and support.</p>
              <p>We celebrate the strengths and unique talents of individuals while rewarding collaboration and team performance. We ask our team members to stretch themselves, and encourage them to develop in a way that provides our clients not only with technical legal expertise, but also people they can build valued relationships with.</p>
              <p>Golden Maple Law LLP is always on the lookout for Case Analysts and Associate Lawyers. If interested, please contact us at: <a href="mailto:admin@goldenmaplelaw.com" target="_blank">admin@goldenmaplelaw.com</a></p>
          </Container>
          <Container className="career-copy">
              <h2>Be part of something great</h2>
              <p>Interested in doing challenging and innovative work? Want to hone your skills alongside the best and brightest legal minds? Consider working for Golden Maple Law LLP. We are a firm that embraces collaboration and teamwork while supporting your personal growth. We value what every individual brings to the table because we believe everyone’s contribution is vital to our success.</p>
              <p>So why come to Golden Maple Law LLP? Unlike more conventional law firms, we operate as a business, which gives us the flexibility to adapt to the realities of our clientele. If you choose to join us, you’ll be provided with the tools and opportunities integral to success.</p>
          </Container>
          <Container className="career-copy">
              <h2>Our Commitment to Inclusion</h2>
              <p>As an organization, we are strongly committed to diversity and especially welcome applications from women, members of the LGBTQ2S+ community, racialized people, people with disabilities, Indigenous peoples, and others who may contribute to the further diversification of ideas.</p>
              <p>Golden Maple Law LLP is an equal opportunity employer that fosters an inclusive, equitable, and accessible environment. Please notify us at <a href="mailto:admin@goldenmaplelaw.com" target="_blank">admin@goldenmaplelaw.com</a> should you require accommodations at any time throughout the recruitment process. We thank all applicants for their interest in Golden Maple Law LLP; however, only chosen applicants will be contacted. We regret that we are unable to respond to individual inquiries about application status.</p>
          </Container>
        </div>
      </Layout>
    )
}

export default Careers;