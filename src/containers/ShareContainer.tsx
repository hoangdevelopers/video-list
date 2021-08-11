import React from "react";
import MainContainer from "../templates/MainContainer";
import { Share } from "../features/share/share";

const ShareContainer: React.FC<{}> = (props) => {
  return (
    <MainContainer>
      <Share />
    </MainContainer>
  );
};
export default ShareContainer;
