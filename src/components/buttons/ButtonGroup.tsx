import * as React from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

type Props = {
  priButtonText: string,
  priButtonPath: string,
  secButtonText: string,
  secButtonPath: string
}

const ButtonGroup = ({ priButtonText, priButtonPath, secButtonPath, secButtonText }: Props) => {
    return (
      <div className="button-group"> 
        <PrimaryButton buttonText={priButtonText} buttonPath={priButtonPath} />
        <SecondaryButton buttonText={secButtonText} buttonPath={secButtonPath} />
      </div>
    )
}

export default ButtonGroup;