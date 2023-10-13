import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pokemon, PokemonHeader } from "../interfaces/pokemon.interface";
import PokeCard from "./PokeCard";
import store from "../redux/store";
import { setPokeapi } from "../redux/pokeSlicer";

export default function PokemonView(){

    const pokeapi = store.getState().pokeapi;
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [header, setHeader] = useState<PokemonHeader>();

    const getPokemon = async()=>{

        await axios.get<PokemonHeader>(pokeapi).then((items)=>{
            setHeader(items.data);
            setPokemon(items.data.results);
        });
    }

    useEffect(()=>{
        getPokemon();
    },);

    const handleNext = ()=>{
        if(header?.next != null){
            store.dispatch(setPokeapi(header?.next))
            getPokemon();
        } else{
            alert('Already last page!')
        }
    }

    const handlePrevious = ()=>{
        if(header?.previous != null){
            store.dispatch(setPokeapi(header?.previous))
            getPokemon();
        }else{
            alert('Already first page!')
        }
    }

    return (
        <div className="bg-black pt-20 relative">
            <div className="bg-black flex flex-wrap justify-evenly mb-5 absolute">
                {pokemon && pokemon.map((item)=>{
                    return <PokeCard key={item.name} name={item.name} url={item.url}/>
                })}
            </div>
            <div className="bg-black join grid grid-cols-2 w-[100%] fixed bottom-0">
                <button className="join-item btn btn-primary" onClick={handlePrevious}>Previous page</button>
                <button className="join-item btn btn-primary" onClick={handleNext}>Next Page</button>
            </div>
        </div>
    );
}