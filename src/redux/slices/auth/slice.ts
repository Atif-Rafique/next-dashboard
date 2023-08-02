import { createSlice } from "@reduxjs/toolkit";
// import { authAPI } from "@/services/baseApi";
// import { TAuthSlice } from "@root/types/store";
import { loginSuccess, registerSuccess } from "./extraReducers";
import { setTokens, logout } from "./reducers";
import { TAuthSlice } from "@/types/store";
import { authAPI } from "@/services/authApi";

const initialState: TAuthSlice = {
  accessToken: null,
  refreshToken: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens: setTokens,
    logout,
  },
  extraReducers: (builder) => {
    builder
      //Login Matchers
      .addMatcher(authAPI.endpoints.signIn.matchFulfilled, loginSuccess)
      //Register Matchers
      .addMatcher(authAPI.endpoints.signUp.matchFulfilled, registerSuccess);
  },
});

export const { setAuthTokens } = slice.actions;
export default slice.reducer;
