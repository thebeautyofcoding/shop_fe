import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
  name: "post",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { setProducts } = postSlice.actions

export default postSlice.reducer
