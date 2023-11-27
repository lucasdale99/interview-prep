import { configureStore } from '@reduxjs/toolkit'
import questionSlice from './questionSlice'

export const store = configureStore({
  reducer: {
    questions: questionSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {questions: QuestionState}
export type AppDispatch = typeof store.dispatch