import * as React from "react";

import {
  Row,
  Col,
  Image
} from 'react-bootstrap';

import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";

type Props = {
  imgName: string,
  title: string,
  subTitle: string
}

const Hero = ({ imgName, title, subTitle }: Props) => {
    return (
      <>
        <Row className="hero">
          <Col>
            <Image src={(`static/${imgName}.png`)} className="hero-bg-img" />
          </Col>
          <div className="floating-hero-content">
            <h1 className="hero-title">{title}</h1>
            <span className="hero-sub">{subTitle}</span>
            <div> 
              <Row>
                <Col><PrimaryButton buttonText="Get Started" buttonPath="mailto:pushkar.prehar@goldenmaplelaw.com" /></Col>
                <Col><SecondaryButton buttonText="Book Meeting" buttonPath="mailto:pushkar.prehar@goldenmaplelaw.com" /></Col>
              </Row>
            </div>
          </div>
        </Row>
      </>
    )
}

export default Hero;