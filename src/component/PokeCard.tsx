import React from "react";
import { Pokemon } from "../interfaces/pokemon.interface";


export default function PokeCard(props:Pokemon){

    const id =  props.url.split('/')[6];

    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";

    // const handleRedirect = (name:string) =>{
        
    // }

    return (
    <div className="card w-64 md:w-96 shadow-xl mt-3 bg-base-100">
        <figure><img src={img} width={400} height={400} alt={props.name} /></figure>
        <div className="card-body bg-neutral rounded-b-2xl">
            <h2 className="card-title text-neutral-content">{props.name}</h2>
            {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Detail</button>
            </div> */}
        </div>
    </div>
    )
}