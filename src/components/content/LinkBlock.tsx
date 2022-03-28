import * as React from "react";

import {
  Row,
  Col
} from 'react-bootstrap';

type Props = {
  method: string,
  linkString: string,
  textString: string
}

const LinkBlock = ({ method, linkString, textString }: Props) => {
    return (
      <Row className="link-wrapper">
        <Col md={{span:6, offset:2}}>
          <span className="method">{method}: </span>
          <a href={linkString}>{textString}</a>
        </Col>
      </Row>
    )
}

export default LinkBlock;