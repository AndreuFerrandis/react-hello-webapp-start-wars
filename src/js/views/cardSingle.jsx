import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/planetas.css";

const CardSingle = () => { 
  const { store, actions } = useContext(Context);
  
  const { uid } = useParams();


  useEffect(() =>{
		actions.getSingleCharacter(uid);
	}, []); 

  

  return (
    <div className="planet-card">
    <div className="card">
        <div className="card-header">
            <h2 className="card-title">{store.character.name}</h2>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Height: </strong>{store.character.height}</li>
            <li className="list-group-item"><strong>Mass: </strong>{store.character.mass}</li>
            <li className="list-group-item"><strong>Hair color: </strong>{store.character.hair_color}</li>
            <li className="list-group-item"><strong>Skin color: </strong>{store.character.skin_color}</li>
            <li className="list-group-item"><strong>Eye color: </strong>{store.character.eye_color}</li>
            <li className="list-group-item"><strong>Birth year: </strong>{store.character.birth_year}</li>
            <li className="list-group-item"><strong>Gender: </strong>{store.character.gender}</li>
          </ul>
        </div>
    </div>
  );
}



export default CardSingle;