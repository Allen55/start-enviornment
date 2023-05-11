import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    carsList: [],
    loading: false,
    error: null
};

export const fetchAllCars = createAsyncThunk('/api/cars', async ()=>{
    try {
        const response = await axios.get('http://localhost:3001/api/cars');
        //console.log(response.data)
        return response.data;
    } catch (err){
        console.log(err)
    }
})

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(fetchAllCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.carsList = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    }
})

export default carsSlice.reducer;