import { userCredentials } from "../../utils/types";
import { baseApi } from "./baseApi";

export const mainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation<{ message: string }, userCredentials>({
      query: (body: userCredentials) => ({
        url: "/users/checkuser",
        method: "POST",
        body: body,
      }),
    }),
    createUser: builder.mutation<void, userCredentials>({
      query: (body: userCredentials) => ({
        url: "users/createuser",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetUserMutation, useCreateUserMutation } = mainApi;
