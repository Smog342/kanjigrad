import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
});

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
