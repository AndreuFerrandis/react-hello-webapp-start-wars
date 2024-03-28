import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardPer from "../component/cardPer.jsx";
import CardPla from "../component/cardPla.jsx";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.getCharacters(); 
	}, [] );
	
	const { characterImageUrls } = store;

	useEffect(() => {
		actions.getPlanets(); 
	}, [] );

	const { planetsImageUrls } = store;
	
	return(
	<div className="text-center mt-5">
		<h2>Personajes</h2>
		<div className="container text-center" style={{ maxHeight: "480px", overflowY: "auto" }}>
  			<div className="row">
			  {store.characters.map((item, index) => {
			return (
      			<CardPer 
				imageUrl={characterImageUrls[item.name]}
				name={item.name}
				key={index}/>
			);
		})}
  			</div>
		</div>	
		<h2>Planetas</h2>
		<div className="container text-center" style={{ maxHeight: "480px", overflowY: "auto" }}>
  			<div className="row">
			  {store.planets.map((item, index) => {
			return (
      			<CardPla 
				imageUrl={planetsImageUrls[item.name]}
				name={item.name}
				key={index}/>
			);
		})}
  			</div>
		</div>	  
	</div>
)};
