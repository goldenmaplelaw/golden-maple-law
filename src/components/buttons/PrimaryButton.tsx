import * as React from "react";

import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string,
  buttonPath: string,
}

const PrimaryButton = ({ buttonText, buttonPath }: Props) => {
    return (
      <Button href={buttonPath} variant="primary" className="primary-btn">{buttonText}</Button>
    )
}

export default PrimaryButton;