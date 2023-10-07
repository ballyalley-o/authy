/* eslint-disable no-unused-vars */
import apiSlice from './api'

const USERS_URL = '/api/v1/users'

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/auth',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = userSlice
