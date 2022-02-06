import * as React from "react";

import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string,
  buttonPath: string
}

const SecondaryButton = ({ buttonText, buttonPath }: Props) => {
    return (
      <Button href={buttonPath} variant="secondary" className="secondary-btn">{buttonText}</Button>
    )
}

export default SecondaryButton;