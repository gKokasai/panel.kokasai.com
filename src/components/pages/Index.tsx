import React from "react";
import ControlPanelTemplate from "../templates/ControlPanelTemplate";
import { Pages } from "../../pages";

const Index = (): JSX.Element => (
  <ControlPanelTemplate page={Pages.index}>
    <>トップページになります</>
  </ControlPanelTemplate>
);

export default Index;
