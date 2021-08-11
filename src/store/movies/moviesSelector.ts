import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectMoviesState = (state: RootState) => state.moviesSliceReducer
export const selectMovies = createSelector(selectMoviesState, state => state.movies.valueSeq().toArray())