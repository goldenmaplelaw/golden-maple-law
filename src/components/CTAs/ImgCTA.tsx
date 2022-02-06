import * as React from "react";

import {
  Row,
  Col,
  Image
} from 'react-bootstrap';

import PrimaryButton from "../../components/buttons/PrimaryButton";

type Props = {
  imgName: string,
  title: string,
  subTitle: string,
  primaryBtn: string,
  primaryBtnPath: string,
}

const ImgCTA = ({ imgName, title, subTitle, primaryBtn, primaryBtnPath }: Props) => {
    return (
      <>
        <Row className="img-cta">
          <Col>
            <Image src={(`static/images/${imgName}.png`)} className="img-cta-bg" />
          </Col>
          <div className="floating-img-cta-content">
            <div className="img-cta-content-wrapper">
              <h1 className="cta-title">{title}</h1>
              <span className="cta-sub">{subTitle}</span>
              <div> 
                <Row>
                  <Col><PrimaryButton buttonText={primaryBtn} buttonPath={primaryBtnPath} /></Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </>
    )
}

export default ImgCTA;