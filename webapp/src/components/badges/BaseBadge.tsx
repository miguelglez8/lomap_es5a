import React from "react";
import "../../public/css/components/badges/BaseBadge.scss";

type Props = {
  text: string;
  icon?: string;
  styles?: Object;
};

function BaseBadge({ text, styles }: Props) {
  return (
    <div className="base-badge" style={styles}>
      {text}
    </div>
  );
}

export default BaseBadge;