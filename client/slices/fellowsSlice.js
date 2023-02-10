import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const addFellow = createAsyncThunk(
    "singleUser/addFellow",
    async ({ id, userId, followerId}) => {
        try {
            let { data } = await axios.get(`/api/users/${id}/users`, {
                userId, followerId
            });
            return data;
        } catch (err) {
            alert("error has occurred, check console");
            console.log("error has occurred, check console", err.message);
        }
    }
)

const addFellowSlice = createSlice({
    name: "addFellow",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addFellow.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});

export default addFellowSlice.reducer;