import { apiSlice } from "./apiSlice"
const USERS_URL = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
                credentials: 'include',
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
                credentials: 'include',
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
                credentials: 'include',
            })
        }),

        getProfile: builder.query({
            query: () => ({
                url: `${USERS_URL}/profile`,
                credentials: 'include',
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useGetProfileQuery,
} = usersApiSlice
