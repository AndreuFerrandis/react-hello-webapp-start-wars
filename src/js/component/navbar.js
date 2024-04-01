import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" 
  	type="button" 
	data-bs-toggle="dropdown" 
	aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">
  		{store.favorites.map((favorite, index) => (
            <li key={index}>
                <span className="dropdown-item">{favorite[index]}</span>
            </li>
        ))}
  </ul>
</div>
			</div>
		</nav>
	);
};
