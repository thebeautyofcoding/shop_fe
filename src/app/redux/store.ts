import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import postReducer from "./post"
import modalReducer from "./modal"
export const store = configureStore({
  reducer: {
    posts: postReducer,
    modal: modalReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
