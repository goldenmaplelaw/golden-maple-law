import * as React from "react"; 
import {Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import ButtonGroup from "../components/buttons/ButtonGroup";
import Layout from '../layout/Layout';
import BlockHeading from "../components/content/BlockHeading";
import IconTile from "../components/misc/IconTile";
import ImgCTA from "../components/CTAs/ImgCTA";
import Tile from "../components/misc/Tile";

const WhyGoldenMapleLaw = () => {
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
          <Container className="service-tiles">
            <Row>
              <Col md={4}>
                <Tile 
                  subject="Why us"
                  title="For Families"
                  subText="."
                  linkBtn="Contact Us"
                  linkBtnPath="mailto:admin@goldenmaplelaw.com"
                />
              </Col>
              <Col md={4}>
                <Tile
                  subject="Why us" 
                  title="For Investors"
                  subText="."
                  linkBtn="Contact Us"
                  linkBtnPath="mailto:admin@goldenmaplelaw.com"
                />
              </Col>
              <Col md={4}>
                <Tile
                  subject="Why us" 
                  title="For Businesses"
                  subText="."
                  linkBtn="Contact Us"
                  linkBtnPath="mailto:admin@goldenmaplelaw.com"
                />
              </Col>
            </Row>
          </Container>
          <ImgCTA
            imgName="why-us"
            title="Making the immigration process easier."
            subTitle="We’re helping families thrive across the world with our customized, affordable legal services."
            primaryBtn="Contact"
            primaryBtnPath="mailto:admin@goldenmaplelaw.com"
          />
        </div>
      </Layout>
    )
}

export default WhyGoldenMapleLaw;