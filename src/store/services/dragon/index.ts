import type { CreateDragonParams, DragonId, EditDragonParams } from "./types";
import { Dragon } from "@entities/dragon";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../config/base-query";

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
    getDragonById: builder.query<Dragon, DragonId>({
      query: ({ id }: DragonId) => ({
        method: "GET",
        url: `/api/v1/dragon/${id}`
      }),
      providesTags: ["Dragon"]
    }),
    createDragon: builder.mutation<void, CreateDragonParams>({
      query: (data: CreateDragonParams) => ({
        method: "POST",
        url: "/api/v1/dragon",
        body: data
      }),
      invalidatesTags: ["Dragon"]
    }),
    editDragon: builder.mutation<void, EditDragonParams>({
      query: (data: EditDragonParams) => ({
        method: "PUT",
        url: `/api/v1/dragon/${data.id}`,
        body: data
      }),
      invalidatesTags: ["Dragon"]
    }),
    deleteDragon: builder.mutation<void, DragonId>({
      query: ({ id }: DragonId) => ({
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
