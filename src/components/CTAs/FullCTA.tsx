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
  secondaryBtn?: string
}

const FullCTA = ({ title, subTitle, buttons, primaryBtn, secondaryBtn }: Props) => {
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
                  <Col><PrimaryButton buttonText={primaryBtn} /></Col>
                  <Col><SecondaryButton buttonText={secondaryBtn} /></Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    )
}

export default FullCTA;