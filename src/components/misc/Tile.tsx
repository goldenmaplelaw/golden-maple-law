import * as React from "react";
import { Image } from 'react-bootstrap';

import LinkButton from "../../components/buttons/LinkButton";

type Props = {
  subject: string,
  title: string,
  subText: string,
  linkBtn: string,
  linkBtnPath: string,
  imgName?: string
}

const Tile = ({ subject, title, subText, linkBtn, linkBtnPath, imgName }: Props) => {
  return (
    <div className="tile">
      {imgName && ( <Image src={(`/${imgName}.jpg`)} className="tile-img" /> )}
      <div className="tile-subject">{subject}</div>
      <div className="tile-content-wrapper">
        <span className="tile-title">{title}</span>
        <span className="tile-sub">{subText}</span>
      </div>
      <div className="tile-btn-wrapper">
        <LinkButton buttonPath={linkBtnPath} buttonText={linkBtn} />
      </div>
    </div>
  )
}

export default Tile;