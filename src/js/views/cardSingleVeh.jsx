import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/planetas.css";

const CardSingleVeh = () => { 
  const { store, actions } = useContext(Context);
  
  const { uid } = useParams();


  useEffect(() =>{
		actions.getSingleVehicle(uid);
	}, []); 

  

  return (
    <div className="planet-card">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">{store.vehicle.name}</h2> 
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Model: </strong>{store.vehicle.model}</li>
            <li className="list-group-item"><strong>Vehicle class: </strong>{store.vehicle.vehicle_class}</li>
            <li className="list-group-item"><strong>Manufacturer: </strong>{store.vehicle.manufacturer}</li>
            <li className="list-group-item"><strong>Cost in credits: </strong>{store.vehicle.cost_in_credits}</li>
            <li className="list-group-item"><strong>Length: </strong>{store.vehicle.length}</li>
            <li className="list-group-item"><strong>Crew: </strong>{store.vehicle.crew}</li>
            <li className="list-group-item"><strong>Passengers: </strong>{store.vehicle.passengers}</li>
            <li className="list-group-item"><strong>Max atmosphering speed: </strong>{store.vehicle.max_atmosphering_speed}</li>
            <li className="list-group-item"><strong>Cargo capacity: </strong>{store.vehicle.cargo_capacity}</li>
            <li className="list-group-item"><strong>Consumables: </strong>{store.vehicle.consumables}</li>
          </ul>
        </div>
    </div>
  );
}



export default CardSingleVeh;