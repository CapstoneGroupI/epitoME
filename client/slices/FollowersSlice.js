import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const Follow = createAsyncThunk(
    "singleUser/Follow",
    async ({ firstName, lastName, userId}) => {
        try {
            let { data } = await axios.get(`/api/users/${id}/users`, {
                firstName,
                lastName,
                userId,
            });
            return data;
        } catch (err) {
            alert("error has occurred, check console");
            console.log("error has occurred, check console", err.message);
        }
    }
)

const FollowSlice = createSlice({
    name: "Follow",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Follow.fulfilled, (state, action) => {
            return state.push(action.payload);
        })
    },
});

export default FollowSlice.reducer;