import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../model/movie";
import { fetchMovies } from "./moviesAction";
import { Map } from "immutable";
import * as _ from "lodash";


function youtube_parser(url: string){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
export interface IMoviesSlice {
  movies: Map<string, IMovie>;
}
const initialState: IMoviesSlice = {
  movies: Map() as Map<string, IMovie>,
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    likeMovies: (state, { payload }) => {
      let movie = state.movies.get(payload.movieId) as IMovie;
      movie = {
        ...movie,
        like: [...movie.like.filter((i) => i !== payload.user), payload.user],
      };
      state.movies = state.movies.set(movie.id, movie);
    },
    disLikeMovies: (state, { payload }) => {
      let movie = state.movies.get(payload.movieId) as IMovie;
      movie = {
        ...movie,
        disLike: [
          ...movie.disLike.filter((i) => i !== payload.user),
          payload.user,
        ],
      };
      state.movies = state.movies.set(movie.id, movie);
    },
    addMovie: (state, { payload }) => {
      const url = `https://www.youtube.com/embed/${youtube_parser(payload.url)}`
      let movie = {
        id: url,
        title: "Custom movie",
        sharedBy: "leanh@mail.com",
        like: [],
        disLike: [],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        src: url,
        poster: undefined,
        type: 'youtube'
      } as IMovie;
      state.movies = state.movies.set(movie.id, movie);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      const moviesMap = Map(_.chain([...payload, ...(state.movies as any).valueSeq().toArray()]).keyBy("id").value()) as any;
      state.movies = moviesMap;
    });
  },
});
export const { likeMovies, disLikeMovies, addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
