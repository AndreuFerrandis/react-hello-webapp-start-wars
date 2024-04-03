import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVeh = (props) => { 
  const { store, actions } = useContext(Context);
  
    const handleAddToFavorites = () => {
      actions.addToFavorites(props.name);
    }


return (
    <div className="card m-1" style={{ width: "18rem" }}>
    <img src={props.imageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-white">{props.name}</h5>
      <Link to={`/cardSingleVeh/${props.uid}`} className="btn btn-primary m-2">Learn more</Link>
      <button onClick={handleAddToFavorites} className="btn btn-warning m-2"><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>
);
};



export default CardVeh;