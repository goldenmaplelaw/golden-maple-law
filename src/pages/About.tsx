import * as React from "react"; 
import {Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import ButtonGroup from "../components/buttons/ButtonGroup";
import Layout from '../layout/Layout';
import BlockHeading from "../components/content/BlockHeading";
import IconTile from "../components/misc/IconTile";
import ImgCTA from "../components/CTAs/ImgCTA";
import Tile from "../components/misc/Tile";


const About = () => {
  return (
    <Layout>
       <div className="why-golden-maple">
          <div className="contact">
            <Hero 
              imgName="contact-us"
              title="It all starts with you."
              subTitle="Work with a team that prioritizes you, like family. "
            /> 
          </div>
          <BlockHeading textString="Take your life where you want to go." />
          <Container className="service-desc">
              <p>Golden Maple Law LLP was founded for one simple, yet very important reason: to put the interests of our clients first.</p>
              <p>We use our expertise to help our clients achieve their goals – in life and in business.</p>
              <p>We analytically measure the success of our firm and each lawyer based upon: client feedback, client savings, immigration success stories, trial success and involvement in the legal and business community.</p>
              <p>The internal structure of traditional firms is primarily based upon a billable approach and attorneys are rewarded or penalized based upon the same. We are not a billable centered practice; rather, we are a client centered practice.</p>
              <p>We are in constant communication with our clients to discuss case assessment and strategies, as well as make recommendations and provide insight into every step of the process. As lawyers, we are not only our client's legal advisors but also their business partners.</p>
              <p>We act as a catalyst by providing our clients with exceptional resources to help their businesses grow, and when the time is right we can help navigate a successful exit. It is like having a good friend or family member advising your business.</p>
              <p>Golden Maple Law LLP is a firm dedicated to helping our clients and our community navigate some of the most challenging times in their lives.</p>
          </Container>
          <ImgCTA
            imgName="why-us"
            title="Making the immigration process easier."
            subTitle="We’re helping families thrive across the world with our customized, affordable legal services."
            primaryBtn="Contact"
            primaryBtnPath="mailto:pushkar.prehar@goldenmaplelaw.com"
          />
        </div>
      </Layout>
  )
}

export default About;