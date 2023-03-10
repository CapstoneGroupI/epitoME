import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - a single post
export const getSinglePostAsync = createAsyncThunk(
    "post/SinglePost",
    async (id) => {
        try{
            const { data } = await axios.get(`api/post/${id}`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//PUT - update post
export const updatePostAsync = createAsyncThunk(
    "post/updatePost",
    async (postObject) => {
        const {id , rating} = postObject
        try{
            const  oldData = await axios.get(`api/post/${id}`)
            const newArray = [...oldData.data.rating, rating]
            const { data } = await axios.put(`api/post/${id}`, newArray)      
            data.rating = newArray;
            console.log('this is data.rating-----------',data.rating)
            return newArray
         } catch (err) {
            console.log(err)
         }
    }
)

const singlePostSlice = createSlice({
    name: "singlePost",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSinglePostAsync.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(updatePostAsync.fulfilled, (state, action) => {
           return action.payload
        })
    }
})

export const selectSinglePost = (state) => state.singlePost 

export default singlePostSlice.reducer