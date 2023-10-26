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
          <Row>
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
            {/* <Col md={{span: 5, offset: 1}}>
              <Tile
                imgName="pushkar"
                subject="Partner" 
                title="Pushkar Prehar"
                subText="Pushkar Prehar is a partner at Golden Maple Law LLP. After achieving his law degree at one of India’s prestigious law schools, Pushkar was called to the Bar in India. 

                After immigrating to Canada, he obtained his license to practice Law in Ontario, Canada. He is qualified to practice in both India and the province of Ontario, Canada. 
                
                He has practiced law in both jurisdictions and has expertise to deal with cross-border matters including Immigration, International law, Litigation among others. Pushkar helps clients solve their most complex problems, focusing on their best interests. He understands and cares for the individual needs of his clients."
                linkBtn="Contact Us"
                linkBtnPath="mailto:admin@goldenmaplelaw.com"
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
