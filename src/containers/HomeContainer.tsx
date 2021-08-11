import React from "react";
import MainContainer from "../templates/MainContainer";
import MoviesList from "../components/MoviesList/MoviesList";

const HomeContainer: React.FC<{}> = (props) => {
  return (
    <MainContainer>
      <MoviesList />
    </MainContainer>
  );
};
export default HomeContainer;
