import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const selectAuth = (state: RootState) => state.authSliceReducer
export {
    selectAuth,
}