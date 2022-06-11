import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category:''

}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action){
            state.category = action.payload;
        },
        removeCategory(state){
            state.category = '';
        }
    }
})

export const {setCategory, removeCategory} = categorySlice.actions

export default categorySlice.reducer