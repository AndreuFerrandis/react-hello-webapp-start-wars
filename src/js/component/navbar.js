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
			<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle " 
  	type="button" 
	data-bs-toggle="dropdown" 
	aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  		{store.favorites.map((favorite, index) => (
            <li key={index} className="d-flex justify-content-between align-items-center">
                <span className="dropdown-item">{favorite}</span>
				<button type="button" className="btn btn-danger btn-sm" onClick={() => actions.removeFromFavorites(index)}>
                <i className="fa-solid fa-trash"></i>
            	</button>
            </li>
        ))}
  </ul>
</div>
			</div>
		</nav>
	);
};
