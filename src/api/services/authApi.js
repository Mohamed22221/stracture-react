import { wrapperAPI } from "../helper/wrapperApi";

export const authApi = wrapperAPI.injectEndpoints({
  reducerPath: "authApi",
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "user/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
