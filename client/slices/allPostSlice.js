import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - all posts

export const getAllPostsAsync = createAsyncThunk(
    "post/allPosts",
    async () => {
        try{
            const { data } = await axios.get(`/api/post/`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//POST - create a message
export const createPostAsync = createAsyncThunk(
  "post/createPost",
  async ({ text, image, userId }, { rejectWithValue }) => {
    console.log()
      try {
          const formData = new FormData();
          formData.append("text", text);
          formData.append("image", image, image.name);
          formData.append("userId", userId);
          const { data } = await axios.post(
              "/api/post",
              formData,
              {
                  headers: {
                      "Content-Type": "multipart/form-data",
                  },
              }
          );
          return data;
      } catch (err) {
          console.log(err);
          return rejectWithValue(err.response.data);
      }
  }
);

//DELETE - delete post
export const deletePostAsync = createAsyncThunk(
  "post/deletePost",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/post/${id}`, {
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
        return state.filter((post) => post.id !== action.payload.id);
      });
  }
  });
  
  export const selectPosts = (state) => {
    return state.posts;
  };
  
  export default allPostSlice.reducer;