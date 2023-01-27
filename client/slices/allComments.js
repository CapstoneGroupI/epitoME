import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - all comments

export const getAllCommentsAsync = createAsyncThunk(
    "post/allComments",
    async () => {
        try{
            const { data } = await axios.get(`api/comment/`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//POST - create a comment
export const createCommentAsync = createAsyncThunk(
    "post/createComment",
    async ({ text }) => {
      try {
        const { data } = await axios.post(
          `/api/comment`, { text },
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );

//DELETE - delete comment
export const deleteCommentAsync = createAsyncThunk(
  "post/deleteComment",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/comment/${id}`, {
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allCommentsSlice = createSlice({
    name: "Comments",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllCommentsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createCommentAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteCommentAsync.fulfilled, (state, action) => {
        return state.filter((comment) => comment.id !== action.payload.id);
      });
  }
  });
  
  export const selectComments = (state) => {
    return state.Comments;
  };
  
  export default allCommentsSlice.reducer;