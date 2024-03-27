import React from "react";
import "../../styles/home.css";
import CardPer from "../component/cardPer.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h2>Personajes</h2>
		<div className="container text-center">
  			<div className="row">
      			<CardPer />
  			</div>
		</div>
			  
	</div>
);
