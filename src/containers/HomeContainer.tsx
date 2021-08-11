import React from "react";
import MainContainer from "../templates/MainContainer";
import { MainMovies } from "../features/main-movies/MainMovies";

const HomeContainer: React.FC<{}> = (props) => {
  return (
    <MainContainer>
      <MainMovies />
    </MainContainer>
  );
};
export default HomeContainer;
