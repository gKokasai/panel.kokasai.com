import React from "react";
import ControlPanelTemplate from "../templates/ControlPanelTemplate";

const Empty = (): JSX.Element => (
  <ControlPanelTemplate page={{ name: "" }}>
    <></>
  </ControlPanelTemplate>
);

export default Empty;
