import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "./api.js";

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
})

export const setupStore = (preloadedState) => configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    preloadedState: preloadedState,
})

export const store = setupStore()