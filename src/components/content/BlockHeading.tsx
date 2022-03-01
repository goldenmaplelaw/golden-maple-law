import * as React from "react";

import {
  Row,
  Col
} from 'react-bootstrap';

type Props = {
  textString: string,
  className?: string
}

const BlockHeading = ({ textString, className }: Props) => {
    return (
      <Row className="block-heading">
        <Col className={className} md={{span:6, offset:1}}>
          <h3 className="block-heading-content">
            {textString}
          </h3>
        </Col>
      </Row>
    )
}

export default BlockHeading;