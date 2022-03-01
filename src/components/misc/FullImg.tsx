import * as React from "react";

import {
  Row,
  Col,
  Image
} from 'react-bootstrap';

type Props = {
  imgName: string,
}

const FullImg = ({ imgName }: Props) => {
    return (
      <>
        <Row className="full-img-wrapper">
          <Col>
            <Image src={(`/${imgName}.png`)} className="full-img" />
          </Col>
        </Row>
      </>
    )
}

export default FullImg;