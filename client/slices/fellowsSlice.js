import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const getFellow = createAsyncThunk(
    "/api/allFollower",
    async () => {
        try{
            const { data } = await axios.get(`/api/follower/`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const createFellow = createAsyncThunk(
    "/api/follower",
    async ({ userId, followerId }) => {
        try {
            console.log(userId, followerId)
            let { data } = await axios.post(`/api/follower`, {
                userId,
                followerId,
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
        builder.addCase(createFellow.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(getFellow.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});

export const selectFellows = (state) => {
    return state.addFellow
}

export default addFellowSlice.reducer;