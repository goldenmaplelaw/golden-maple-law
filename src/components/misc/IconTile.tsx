import * as React from "react";

import {
  Image
} from 'react-bootstrap';

type Props = {
  title: string,
  imgName: string,
  link?: boolean,
  linkPath?: string,
  linkString?: string
}

const IconTile = ({ title, imgName, link, linkPath, linkString }: Props) => {
    return (
      <div className="icon-tile">
        <div className="icon-tile-icon">
          <Image src={(`/${imgName}.png`)} className="tile-icon-img" />
        </div>
        <div className="icon-tile-content-wrapper">
          <span className="icon-tile-title">{title}</span>
        </div>
        {link && (
          <div className="icon-tile-link-wrapper">
            <a href={linkPath} className="icon-tile-link">{linkString}</a>
          </div>
        )}
      </div>
    )
}

export default IconTile;