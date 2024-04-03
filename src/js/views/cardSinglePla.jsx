import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/planetas.css";

const CardSinglePla = () => { 
  const { store, actions } = useContext(Context);
  
  const { uid } = useParams();


  useEffect(() =>{
		actions.getSinglePlanet(uid);
	}, []); 

  

  return (
    <div className="planet-card">
    <div className="card">
        <div className="card-header">
            <h2 className="card-title">{store.planet.name}</h2>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Diameter:</strong> {store.planet.diameter}</li>
            <li className="list-group-item"><strong>Rotation period:</strong> {store.planet.rotation_period}</li>
            <li className="list-group-item"><strong>Orbital Period:</strong> {store.planet.orbital_period}</li>
            <li className="list-group-item"><strong>Gravity:</strong> {store.planet.gravity}</li>
            <li className="list-group-item"><strong>Population:</strong> {store.planet.population}</li>
            <li className="list-group-item"><strong>Climate:</strong> {store.planet.climate}</li>
            <li className="list-group-item"><strong>Terrain:</strong> {store.planet.terrain}</li>
            <li className="list-group-item"><strong>Surface water:</strong> {store.planet.surface_water}</li>
        </ul>
    </div>
    </div>
  );
}



export default CardSinglePla;