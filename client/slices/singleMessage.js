import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - a single message
export const getSingleMessageAsync = createAsyncThunk(
    "message/SingleMessage",
    async (id) => {
        try{
            const { data } = await axios.get(`/api/message/${id}`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//PUT - update message
export const updateMessageAsync = createAsyncThunk(
    "message/updateMessage",
    async({text}) => {
        try{
            const { data } = await axios.put(`/api/message/${id}`, {text})
            return data
         } catch (err) {
            console.log(err)
         }
    }
)

const singleMessageSlice = createSlice({
    name: "singleMessage",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSingleMessageAsync.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(updateMessageAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectSingleMessage = (state) => state.singleMessage 

export default singleMessageSlice.reducer