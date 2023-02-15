import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const initialState = {};

export const getSingleProfile = createAsyncThunk("singleUser", async (id) => {
    try {
        const { data } = await axios.get(`/api/users/${id.id}`)
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const editSingleUser = createAsyncThunk(
    "singleUser/edit",
    async ({
        id,
        username,
        email,
        firstName,
        lastName,
        birthday,
        city,
        state,
        profilePic,
        isAdmin
    }) => {
        try {
            const { data } = await axios.put(`/api/users/${id}`, {
                id,
                username,
                email,
                firstName,
                lastName,
                birthday,
                city,
                state,
                profilePic,
                isAdmin
            });
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

const singleProfileSlice = createSlice({
    name: "singleUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSingleProfile.fulfilled, (state, action) =>  
            state = action.payload
        );
        builder.addCase(editSingleUser.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectSingleUser = (state) => {
    return state.singleUser;
};

export default singleProfileSlice.reducer;