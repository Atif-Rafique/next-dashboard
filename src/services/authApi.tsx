// apiSlice.js

import { TAGS } from './baseApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const authAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({


    signIn: builder.mutation({
      query: ({ email, password }): any => { },
    }),


    signUp: builder.mutation({
      query: ({ email, password }): any => { },
    }),

    resetPassword: builder.mutation({
      query: ({ email }): any => { },
    }),



    logout: builder.mutation({
      query: (): any => {

      },
      // queryFn: () => ({ data: null }),
      invalidatesTags: TAGS,
    }),

  }),
});

// Export the auto-generated hooks
export const { useSignInMutation, useSignUpMutation, useResetPasswordMutation, useLogoutMutation } = authAPI;
