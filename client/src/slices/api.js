/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TAG = 'User'

const baseQuery = fetchBaseQuery({ baseUrl: '' })

const apiSlice = createApi({
  baseQuery,
  tagTypes: [TAG],
  endpoints: (builder) => ({}),
})

export default apiSlice
