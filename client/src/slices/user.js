/* eslint-disable no-unused-vars */
import apiSlice from './api'

const USERS_URL = '/api/v1/users'

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/auth',
        method: 'POST',
        body: data,
      }),
    }),
    signout: builder.mutation({
      query: () => ({
        url: USERS_URL + '/signout',
        method: 'POST',
      }),
    }),
  }),
})

export const { useSigninMutation, useSignoutMutation } = userSlice
