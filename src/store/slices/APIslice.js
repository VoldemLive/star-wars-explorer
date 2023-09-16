import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const starwarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  refetchOnFocus: false,
  refetchOnReconnect: false,
  endpoints: (builder) => ({
    getNextPesons: builder.query({
      query: (pageNumber = 1) => `people?page=${pageNumber}`,
      keepUnusedDataFor: 5000,
    }),
    getPersonById: builder.query({
      query: (item) => item.url,
      keepUnusedDataFor: 5000,
    }),
  }),
})

export const { useGetPersonByIdQuery, useGetNextPesonsQuery } = starwarsApi
