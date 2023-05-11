import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    charactersList: [],
    loading: false,
    error: null
};

export const fetchAllCharacters = createAsyncThunk('allCharacters', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/characters')
        return response.data
    } catch (e){
        throw new Error('did not load, sorry')
    }
})


const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllCharacters.pending, (state, action)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchAllCharacters.fulfilled, (state, action) => {
            state.loading = false;
            state.charactersList = action.payload
        })
        .addCase(fetchAllCharacters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default characterSlice.reducer;