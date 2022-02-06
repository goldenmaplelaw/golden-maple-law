import * as React from "react";

import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";

type Props = {
  title: string,
  subTitle?: string,
  buttons?: boolean,
  primaryBtn?: string,
  primaryBtnPath?: string,
  secondaryBtn?: string,
  secondaryBtnPath?: string,
}

const FullCTA = ({ title, subTitle, buttons, primaryBtn, primaryBtnPath, secondaryBtn, secondaryBtnPath }: Props) => {
    return (
      <Container>
        <Row className="full-cta">
          <Col className="full-cta-title-wrap" md={8}>
            <span className="full-cta-title">{title}</span>
            {subTitle && (
              <span className="full-cta-sub">{subTitle}</span>
            )}
            {buttons && (
              <div className="full-cta-btns"> 
                <Row>
                  <Col><PrimaryButton buttonText={primaryBtn} buttonPath={primaryBtnPath} /></Col>
                  <Col><SecondaryButton buttonText={secondaryBtn} buttonPath={secondaryBtnPath} /></Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    )
}

export default FullCTA;