import * as React from "react";

import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string,
}

const PrimaryButton = ({ buttonText }: Props) => {
    return (
      <Button variant="primary" className="primary-btn">{buttonText}</Button>
    )
}

export default PrimaryButton;