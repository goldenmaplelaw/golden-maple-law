import * as React from "react";

import {
  Row,
  Col
} from 'react-bootstrap';

type Props = {
  textString: string,
  className?: string
}

const TextBlock = ({ textString, className }: Props) => {
    return (
      <Row className="text-wrapper">
        <Col className={className} md={12}>
          <span className="text-content">
            {textString}
          </span>
        </Col>
      </Row>
    )
}

export default TextBlock;