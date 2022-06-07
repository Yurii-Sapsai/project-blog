import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action){
            console.log(state)
            console.log(action)

            state = state.push(action.payload)

            console.log(state)
        },
        removePost(state){
        }
    }
})

export const {addPost, removePost} = postSlice.actions

export default postSlice.reducer