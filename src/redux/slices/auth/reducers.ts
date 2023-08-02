// import { TAuthSlice } from "@root/types/store";

import { TAuthSlice } from "@/types/store";

const initialState: TAuthSlice = {
  accessToken: null,
  refreshToken: null,
};

export const setTokens = (state: any, action: any) => {
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
};

export const logout = (state: any, action: any) => {
  state = initialState;
};
