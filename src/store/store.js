import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { starwarsApi } from "./slices/APIslice"
import stateSliceReducer from "./slices/stateSlice"

const store = configureStore({
  reducer: {
    [starwarsApi.reducerPath]: starwarsApi.reducer,
    loadingState: stateSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starwarsApi.middleware),
})

setupListeners(store.dispatch)

export default store
