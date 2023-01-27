import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - all posts

export const getAllPostsAsync = createAsyncThunk(
    "post/allPosts",
    async () => {
        try{
            const { data } = await axios.get(`api/post/`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//POST - create a post
export const createPostAsync = createAsyncThunk(
    "post/createPost",
    async ({ text, image }) => {
      try {
        const { data } = await axios.post(
          `/api/post`, { text, image },
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );

//DELETE - delete post
export const deletePostAsync = createAsyncThunk(
  "post/deletePost",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`, {
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allPostSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllPostsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createPostAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deletePostAsync.fulfilled, (state, action) => {
        return state.filter((product) => product.id !== action.payload.id);
      });
  }
  });
  
  export const selectPosts = (state) => {
    return state.posts;
  };
  
  export default allPostSlice.reducer;