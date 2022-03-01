import * as React from "react";

import {
  Image
} from 'react-bootstrap';

type Props = {
  title: string,
  imgName: string,
  // link?: string,
  // linkPath?: string,
}

const IconTile = ({ title, imgName }: Props) => {
    return (
      <div className="icon-tile">
        <div className="icon-tile-icon">
          <Image src={(`/${imgName}.png`)} className="tile-icon-img" />
        </div>
        <div className="icon-tile-content-wrapper">
          <span className="icon-tile-title">{title}</span>
        </div>
      </div>
    )
}

export default IconTile;