import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - retrieve all user data
export const getAllUsersAsync = createAsyncThunk(
    "users/allUsers",
    async () => {
        try{
            const {data} = await axios.get(`/api/users`)
            return data;
        } catch (err) {
            console.log(err)
        }
    }
)

//POST - create a user (is done when creating an account (?))
export const createUserAsync = createAsyncThunk(
    "users/createUser",
    async ({username, password, email, firstName, lastName, birthday, pronouns, city, state, profilePic}) => {
        try{ 
            const {data} = await axios.post(
                `api/users`,
                {username, password, email, firstName, lastName, birthday, pronouns, city, state, profilePic},
                );
                return data;
            } catch (err) {
                console.log(err)
            }
        }
)

//DELETE - remove user (admin only for now?)
export const deleteUserAsync = createAsyncThunk(
    "users/deleteUser",
    async (id) => {
        try{
            const token = window.localStorage.getItem("token");
            const {data} = await axios.delete(`/api/users/${id}`, {
                headers: {authorization: token},
            });
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

const AllUsersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.push(action.payload)
        });
        builder.addCase(createUserAsync.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
            return state.filter((user) =>  user.id !== action.payload.id)
        })
    }
})

export const selectUsers = (state) => {
    return state.users
}

export default AllUsersSlice.reducer;