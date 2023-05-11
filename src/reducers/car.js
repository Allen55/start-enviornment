import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initState = [];

export const fetchAllCars = createAsyncThunk('allCars', async ()=>{
    try {
        const {data} = await axios.get('/api/cars');
        return data;
    } catch (err){
        console.log(err)
    }
})

const carsSlice = createSlice({
    name: 'cars',
    initState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllCars.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default carsSlice.reducer;