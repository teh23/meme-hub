import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    tags: [],
    status: "idle",
    error: ""
}

export const fetchTags = createAsyncThunk('tags/fetchTags',
    async () => {
        const response = await axios.get("/api/tags/")
        return response.data
    }
)


const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTags.pending]: (state,action) =>{
            state.status = "loading"
        },
        [fetchTags.fulfilled] : (state,action) =>{
            state.status = "succeeded"
            console.log(action.payload)
            state.tags.push(action.payload)
        },
        [fetchTags.rejected] : (state, action) =>{
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export default tagsSlice.reducer