import { createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { ILoginParams } from "../../model/auth";
import { Login } from "../../core/login";

export const authLogin = createAsyncThunk(
  "login/authLogin",
  (params: ILoginParams) => Login(params).then((res: any) => res.data)
);

