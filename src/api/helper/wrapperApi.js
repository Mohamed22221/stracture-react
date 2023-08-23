import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const domain = "https://easymedia.com/api";
export const baseUrl = `${domain}/user`;

export const wrapperAPI = createApi({
  reducerPath: "wrapperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: domain,
    prepareHeaders: (header) => {
      const token = localStorage.getItem("jwt");
      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }

      return header;
    },
  }),

  endpoints: () => ({}),
});
