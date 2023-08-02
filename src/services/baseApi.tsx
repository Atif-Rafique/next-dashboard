// RTK Query
import { BASE_URL } from "@/config";
import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// Store
// import { RootState } from "@root/redux/store";
// Config
// import { BASE_URL } from "@root/config";

// Tags
export const TAGS: any = [
  "auth",
];


// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseAPI = createApi({
  reducerPath: "api",
  // baseQuery: baseQueryWithRetry,
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
