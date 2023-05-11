import {configureStore} from "@reduxjs/toolkit";
import characters from "./reducers/character";
import cars from "./reducers/car";

const store = configureStore({
    reducer:{
        characters: characters,
        cars: cars
    }
})

export default store;