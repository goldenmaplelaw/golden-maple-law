import * as React from "react";

import LinkButton from "../../components/buttons/LinkButton";

type Props = {
  subject: string,
  title: string,
  subText: string,
  linkBtn: string,
  linkBtnPath: string,
}

const Tile = ({ subject, title, subText, linkBtn, linkBtnPath }: Props) => {
    return (
      <div className="tile">
        <div className="tile-subject">{subject}</div>
        <div className="tile-content-wrapper">
          <span className="tile-title">{title}</span>
          <span className="tile-sub">{subText}</span>
        </div>
        <div className="tile-btn-wrapper">
          <LinkButton href={linkBtnPath} buttonText={linkBtn} />
        </div>
      </div>
    )
}

export default Tile;