import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option = "test", Icon, id }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon key={id} className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
