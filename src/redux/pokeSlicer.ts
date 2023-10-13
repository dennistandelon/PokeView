import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
    name:'pokemon',
    initialState:{
        pokeapi:"https://pokeapi.co/api/v2/pokemon/"
    },
    reducers:{
        setPokeapi: (state,action) =>{
            state.pokeapi = action.payload
        }
    }
})

export const {setPokeapi} = pokeSlice.actions;
export const pokeReducer = pokeSlice.reducer;
