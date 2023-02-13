import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const Follow = createAsyncThunk(
    "singleUser/Follow",
    async ({ firstName, lastName, userId}) => {
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

const FollowSlice = createSlice({
    name: "Follow",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
<<<<<<< HEAD:client/slices/FollowersSlice.js
        builder.addCase(Follow.fulfilled, (state, action) => {
            return state.push(action.payload);
=======
        builder.addCase(createFellow.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(getFellow.fulfilled, (state, action) => {
            return action.payload;
>>>>>>> 820185224d87e554e57848c79a01a7e75d92b682:client/slices/fellowsSlice.js
        })
    },
});

<<<<<<< HEAD:client/slices/FollowersSlice.js
export default FollowSlice.reducer;
=======
export const selectFellows = (state) => {
    return state.addFellow
}

export default addFellowSlice.reducer;
>>>>>>> 820185224d87e554e57848c79a01a7e75d92b682:client/slices/fellowsSlice.js
