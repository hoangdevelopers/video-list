import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetMovies } from "../../core/movies";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  () => GetMovies().then((res: any) => res.data.data)
);

