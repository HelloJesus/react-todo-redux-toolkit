import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducer'

export const store = configureStore({
    reducer: {
        todos: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
