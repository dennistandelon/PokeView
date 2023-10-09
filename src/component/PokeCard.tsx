import React from "react";
import { Pokemon } from "../interfaces/pokemon.interface";


export default function PokeCard(props:Pokemon){

    return <div>
        {props.name}, {props.url}
    </div>
}