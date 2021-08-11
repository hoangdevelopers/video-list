import React from "react";
import { IMovie } from "../../../model/movie";
import MovieItem from "../MovieItem/MovieItem";
export interface IMoviesList {
  movies: IMovie[];
  onLike: (id: string) => void;
  onDisLike: (id: string) => void;
}
const MoviesList: React.FC<IMoviesList> = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.id}
          onLike={props.onLike}
          onDisLike={props.onDisLike}
        />
      ))}
    </div>
  );
};

export default MoviesList;
