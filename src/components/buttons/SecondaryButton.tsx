import * as React from "react";

import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string,
}

const SecondaryButton = ({ buttonText }: Props) => {
    return (
      <Button variant="secondary" className="secondary-btn">{buttonText}</Button>
    )
}

export default SecondaryButton;