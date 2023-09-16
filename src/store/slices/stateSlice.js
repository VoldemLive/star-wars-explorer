import { createSlice } from "@reduxjs/toolkit"

export const stateSlice = createSlice({
  name: "dataLoadingState",
  initialState: { value: false },
  reducers: {
    loding: (state) => {
      state.value = true
    },
    loaded: (state) => {
      state.value = false
    },
  },
})

export const { loding, loaded } = stateSlice.actions
export default stateSlice.reducer
