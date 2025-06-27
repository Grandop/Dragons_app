import type { AuthSessionParams, AuthSessionResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../config/base-query";

export const DragonService = createApi({
  reducerPath: "dragon-service",
  baseQuery,
  endpoints: (builder) => ({
    getDragon: builder.query<AuthSessionResponse, void>({
      query: () => ({
        method: "GET",
        url: "/api/v1/dragon"
      })
    }),
    getDragonById: builder.query<AuthSessionResponse, { id: string }>({
      query: ({ id }) => ({
        method: "GET",
        url: `/api/v1/dragon/${id}`
      })
    }),
    createDragon: builder.mutation<AuthSessionResponse, AuthSessionParams>({
      query: (data: AuthSessionParams) => ({
        method: "POST",
        url: "/api/v1/dragon",
        body: data
      })
    }),
    editDragon: builder.mutation<AuthSessionResponse, AuthSessionParams>({
      query: (data: AuthSessionParams) => ({
        method: "PUT",
        url: `/api/v1/dragon/${data.email}`,
        body: data
      })
    }),
    deleteDragon: builder.mutation<AuthSessionResponse, { id: string }>({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/api/v1/dragon/${id}`
      })
    })
  })
});

export const {
  useGetDragonQuery,
  useGetDragonByIdQuery,
  useCreateDragonMutation,
  useEditDragonMutation,
  useDeleteDragonMutation
} = DragonService;
