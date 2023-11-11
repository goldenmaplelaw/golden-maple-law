import * as React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Hero from "../components/Hero";
import ImgCTA from "../components/CTAs/ImgCTA";
import Tile from "../components/misc/Tile";

import "../index.scss";
import Layout from '../layout/Layout';

// markup
const OurTeam = () => {
  return (
    <Layout>
      <div className="our-team">
        <Hero 
          imgName="toronto-skyline"
          title="Our team. Your family."
        />
        <Container>
          <Row className="our-team-row">
            <Col md={5}>
              <Tile
                imgName="garry"
                subject="Partner"
                title="Garry Shapiro"
                subText="Garry Shapiro is a partner of Golden Maple LLP, with over thirty years of experience. During his professional career, Garry was the senior real estate lawyer for one of Canada’s largest national banks; general counsel and vice president for a Mortgage, Finance and a Brokerage Company, and vice-president for a national title insurance company. He was also the senior real estate and business lawyer at a major Bay Street law firm for 12 years.  In addition to all that, Garry was a member of a municipal committee of adjustments for a three year term. He obtained his Civil and Common Law Degrees from McGill University, as well as a Masters Degree in Business Administration."
                linkBtn="Contact Us"
                linkBtnPath="mailto:admin@goldenmaplelaw.com"
              />
            </Col>
            <Col md={{span: 5, offset: 1}}>
              <Tile
                imgName="fatima"
                subject="Partner" 
                title="Fatima Mirabdolbaghi"
                subText="Fatima Mirabdolbaghi completed her Bachelor of Law with Honors at the University of Leeds, a
                member of the Russell Group Association in the UK, as well as a Bachelor Degree in Sociology
                from York University. Since 2019 and upon her return to Canada, Fatima quickly integrated into
                the Canadian legal profession. Her experience involved working in small and mid-sized law firms
                as well as in-house environment. Fatima's background encompasses areas of Real Estate,
                Corporate and Immigration Law. She understands the nuances and details necessary to
                navigate legal complexities and can offer clients relatable and professional advice. Fatima is
                committed to delivering top-tier service, underpinned by a broad legal education and a
                dedication to upholding the interests and ambitions of her clients."
                linkBtn="Contact Us"
                linkBtnPath="mailto:fatima@goldenmaplelaw.com"
              />
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Tile
                imgName="jane"
                subject="Paralegal"
                title="Jane Li"
                subText="Jane Li is a Licensed Paralegal in Ontario and a Regulated Immigration Consultant in
                Canada. Starting in January 2016, Jane has been actively working in the field of immigration
                after obtaining her Immigration Consultant License. She has extensive experience in Permanent
                Residence Programs such as CECs & FSWs, PNPs and family sponsorships, as well as Temporary
                Visa Programs such as LMIA &; Work Permits, Study Permits and Visitor Visa. Jane holds a
                Bachelor's Degree in Science, with a specialization in the field of Mechanics. She also holds a
                Juris Master's Degree from Liaoning University, China. Jane is fluent in English and Mandarin."
                linkBtn="Contact Us"
                linkBtnPath="mailto:admin@goldenmaplelaw.com"
              />
            </Col>
            {/* <Col md={{span: 5, offset: 1}}>
              <Tile
                imgName="mo"
                subject="Intern" 
                title="Mohammad Mirabdolbaghi"
                subText="Student-at-law."
                linkBtn="Contact Us"
                linkBtnPath="mailto:mo@goldenmaplelaw.com"
              />
            </Col> */}
          </Row>
        </Container>
        <ImgCTA
          imgName="city-buildings"
          title="Our team. Your family."
          subTitle="The Golden Maple team is a diverse group of dedicated lawyers who all want to make the immigration process easier for families, investors, and businesses. Our team is well versed in immigration and business law, and we are prepared to take on any legal challenge - all in the hopes to accomplish our mission of connecting people globally. We’re a passionate group of professionals that celebrate client wins, as if you were our own family. Empathy is the main tenant of our team - and we are dedicated to solving your challenges as a team."
          primaryBtn="Contact"
          primaryBtnPath="mailto:admin@goldenmaplelaw.com"
        />
      </div>
    </Layout>
  )
}

export default OurTeam;
