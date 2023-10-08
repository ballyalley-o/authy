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
    register: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
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
    updateUser: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/profile',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {
  useSigninMutation,
  useSignoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userSlice
