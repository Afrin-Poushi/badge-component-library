import React from "react";
import "../badge.css";

const SCBadge = (props) => {
  return (
    <div className="badge">
      {props.children}
      <div className="badgeContent"></div>
    </div>
  );
};

export default SCBadge;
