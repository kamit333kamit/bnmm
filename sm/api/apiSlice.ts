import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fakeBaseQuery(), // optional
    tagTypes: ['Shops', 'User'],
    endpoints: builder => ({})
})