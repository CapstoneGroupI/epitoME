import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//GET - all messages

export const getAllMessagesAsync = createAsyncThunk(
    "post/allMessages",
    async () => {
        try{
            const { data } = await axios.get(`api/message/`);
            return data;
        } catch (err) {
            console.log(err)
    }
})

//POST - create a Message
export const createMessageAsync = createAsyncThunk(
    "post/createMessage",
    async ({ text }) => {
      try {
        const { data } = await axios.post(
          `/api/post`, { text },
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );

//DELETE - delete message
export const deleteMessageAsync = createAsyncThunk(
  "post/deleteMessage",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/message/${id}`, {
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allMessagesSlice = createSlice({
    name: "messages",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllMessagesAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createMessageAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteMessageAsync.fulfilled, (state, action) => {
        return state.filter((message) => message.id !== action.payload.id);
      });
  }
  });
  
  export const selectMessages = (state) => {
    return state.messages;
  };
  
  export default allMessagesSlice.reducer;