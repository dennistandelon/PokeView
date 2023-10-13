import { configureStore } from "@reduxjs/toolkit";
import { pokeReducer } from "./pokeSlicer";

const store = configureStore({
    reducer:pokeReducer
})

export default store;