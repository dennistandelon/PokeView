import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pokemon, PokemonHeader } from "../interfaces/pokemon.interface";
import PokeCard from "./PokeCard";

const pokeapi = "https://pokeapi.co/api/v2/pokemon/";

export default function PokemonView(){

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    const getPokemon = async()=>{

        await axios.get<PokemonHeader>(pokeapi).then((items)=>{
            setPokemon(items.data.results);
            console.log(pokemon);
        });
    }

    useEffect(()=>{
        getPokemon();
    },);


    return (<div>
        {pokemon && pokemon.map((item)=>{
            return <PokeCard key={item.name} name={item.name} url={item.url}/>
        })}
    </div>);
}