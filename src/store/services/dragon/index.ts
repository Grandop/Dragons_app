import type { AuthSessionParams, AuthSessionResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../config/base-query";
import { Dragon } from "../../../entities/dragon";

export const DragonService = createApi({
  reducerPath: "dragon-service",
  baseQuery,
  tagTypes: ["Dragon"],
  endpoints: (builder) => ({
    getDragon: builder.query<Dragon[], void>({
      query: () => ({
        method: "GET",
        url: "/api/v1/dragon"
      }),
      providesTags: ["Dragon"]
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
      }),
      invalidatesTags: ["Dragon"]
    }),
    editDragon: builder.mutation<AuthSessionResponse, AuthSessionParams>({
      query: (data: AuthSessionParams) => ({
        method: "PUT",
        url: `/api/v1/dragon/${data.email}`,
        body: data
      }),
      invalidatesTags: ["Dragon"]
    }),
    deleteDragon: builder.mutation<AuthSessionResponse, { id: string }>({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/api/v1/dragon/${id}`
      }),
      invalidatesTags: ["Dragon"]
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
