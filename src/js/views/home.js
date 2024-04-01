import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardPer from "../component/cardPer.jsx";
import CardPla from "../component/cardPla.jsx";
import CardVeh from "../component/cardVeh.jsx";
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

	useEffect(() => {
		actions.getVehicles(); 
	}, [] );

	const { vehiclesImageUrls } = store;
	
	return(
	<div className="text-center mt-5">
		<h2>Characters</h2>
		<div className="container text-center">
  			<div className="row flex-row flex-nowrap overflow-auto">
			  {store.characters.map((item, index) => {
			return (
      			<CardPer 
				imageUrl={characterImageUrls[item.name]}
				name={item.name}
				key={index}
				onAddToFavorites={actions.addToFavorites}/>
			);
		})}
  			</div>
		</div>	
		<h2>Planets</h2>
		<div className="container text-center">
  			<div className="row flex-row flex-nowrap overflow-auto">
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
		<h2>Vehicles</h2>
		<div className="container text-center">
  			<div className="row flex-row flex-nowrap overflow-auto">
			  {store.vehicles.map((item, index) => {
			return (
      			<CardPla 
				imageUrl={vehiclesImageUrls[item.name]}
				name={item.name}
				key={index}/>
			);
		})}
  			</div>
		</div>	  
	</div>
)};
