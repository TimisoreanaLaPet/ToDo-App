import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const query = fetchBaseQuery({
    baseUrl: "http://localhost:1234",
})

export const api = createApi({
    baseQuery: query,
    reducerPath: "api",
    tagTypes: ['Notes'],
    endpoints: (build) => ({
        getNotes: build.query({
            query: (args) => ({
                url: 'notes',
                params: args,
            }),
            providesTags: ['Notes'],
        }),
        createNote: build.mutation({
            query: (body) => ({
                url: 'notes',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Notes'],
        }),
        updateNote: build.mutation({
            query: (body) => ({
                url: 'notes',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['Notes'],
        }),
        deleteNote: build.mutation({
            query: (query) => ({
                url: `notes/${query}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Notes'],
        }),
    }),
})

export const {
    useGetNotesQuery,
    useCreateNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation,
} = api