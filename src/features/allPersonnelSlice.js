import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

//thunks are your actions you call to your reducer

export const fetchPersonnellAsync = createAsyncThunk("personnel", async () => {
    try {
        const { data } = await axios.get(`http://localhost:8080/api/personnel`);
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const addPersonnelASync = createAsyncThunk("addPersonnel", async (person) => {
  const { data } = await axios.post(`/api/personnel`, person);
  return data
});

const personnelSlice = createSlice({
    name: "Personnel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPersonnellAsync.fulfilled, (state, action) => {
            // Add user to the state array
            return action.payload;
        });
        builder.addCase(addPersonnelASync.fulfilled, (state, action) => {
          state.push(action.payload);
        });
    },
});

export const selectPersonnel = (state) => {
    return state.Personnel;
};

export default personnelSlice.reducer;