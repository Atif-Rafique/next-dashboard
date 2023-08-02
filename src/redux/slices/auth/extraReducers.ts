// import { TAuthSlice } from "@root/types/store";

import { TAuthSlice } from "@/types/store";

export const loginSuccess = (state: TAuthSlice, action: any) => {
  const data = action.payload.data;
  state.accessToken = data.accessToken;
  state.refreshToken = data.refreshToken;
};

export const registerSuccess = (state: TAuthSlice, action: any) => {
  const data = action.payload.data;
  state.accessToken = data.accessToken;
  state.refreshToken = data.refreshToken;
};
