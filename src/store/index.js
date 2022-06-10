import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import postsReducer from './slices/postSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer
    }
})