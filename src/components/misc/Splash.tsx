import * as React from "react";

import {
  Row,
  Col,
  Container,
  Image
} from 'react-bootstrap';

import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";

type Props = {
  title: string,
  subTitle?: string,
  imgName: string,
  buttons?: boolean,
  primaryBtn?: string,
  primaryBtnPath?: string,
  secondaryBtn?: string,
  secondaryBtnPath?: string,
}

const Splash = ({ title, subTitle, imgName, buttons, primaryBtn, primaryBtnPath, secondaryBtn, secondaryBtnPath }: Props) => {
    return (
      <Container>
        <Row className="splash">
          <Col className="splash-title-wrap" md={8}>
            <span className="splash-title">{title}</span>
            {subTitle && (
              <span className="splash-sub">{subTitle}</span>
            )}
          </Col>
        </Row>
        <Row className="splash">
          <Image src={(`/${imgName}`)} className="splash-img" />
        </Row>
        {buttons && (
          <div className="splash-btns"> 
            <Row>
              <Col><PrimaryButton buttonText={primaryBtn} buttonPath={primaryBtnPath} /></Col>
              <Col><SecondaryButton buttonText={secondaryBtn} buttonPath={secondaryBtnPath} /></Col>
            </Row>
          </div>
        )}
      </Container>
    )
}

export default Splash;