import * as React from "react";

import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string,
  buttonPath: string,
}

const LinkButton = ({ buttonText, buttonPath }: Props) => {
    return (
      <Button href={buttonPath} variant="link" className="link-btn">{buttonText}</Button>
    )
}

export default LinkButton;