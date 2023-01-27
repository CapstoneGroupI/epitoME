import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - a single comment
export const getSingleCommentAsync = createAsyncThunk(
    "comment/SingleComment",
    async (id) => {
        try{
            const { data } = await axios.get(`/api/comment/${id}`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//PUT - update Comment
export const updateCommentAsync = createAsyncThunk(
    "comment/updateComment",
    async({text}) => {
        try{
            const { data } = await axios.put(`/api/comment/${id}`, {text})
            return data
         } catch (err) {
            console.log(err)
         }
    }
)

const singleCommentSlice = createSlice({
    name: "singleComment",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSingleCommentAsync.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(updateCommentAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectSingleComment = (state) => state.singleComment 

export default singleCommentSlice.reducer