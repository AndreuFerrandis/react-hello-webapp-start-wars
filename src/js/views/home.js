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
    <h2 className="header">Characters</h2>
    <div className="container text-center">
        <div className="row flex-row flex-nowrap overflow-auto card-container">
            {store.characters.map((item, index) => (
                <CardPer 
                    imageUrl={characterImageUrls[item.name]}
                    name={item.name}
                    uid={item.uid}
                    key={index}
                    onAddToFavorites={actions.addToFavorites}
                />
            ))}
        </div>
    </div>
    <h2 className="header">Planets</h2>
    <div className="container text-center">
        <div className="row flex-row flex-nowrap overflow-auto card-container">
            {store.planets.map((item, index) => (
                <CardPla 
                    imageUrl={planetsImageUrls[item.name]}
                    name={item.name}
                    uid={item.uid}
                    key={index}
                />
            ))}
        </div>
    </div>
    <h2 className="header">Vehicles</h2>
    <div className="container text-center">
        <div className="row flex-row flex-nowrap overflow-auto card-container">
            {store.vehicles.map((item, index) => (
                <CardVeh 
                    imageUrl={vehiclesImageUrls[item.name]}
                    name={item.name}
                    uid={item.uid}
                    key={index}
                />
            ))}
        </div>
    </div>      
	</div>	
)};
