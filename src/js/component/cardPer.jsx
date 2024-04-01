import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardPer = (props) => { 
  const { store, actions } = useContext(Context);
  
    const handleAddToFavorites = () => {
      actions.AddToFavorites(props.name);
    };


return (
    <div className="card m-1" style={{ width: "18rem" }}>
    <img src={props.imageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <a href="#" className="btn btn-primary m-2">Learn more</a>
      <button href="#" onClick={handleAddToFavorites} className="btn btn-warning m-2"><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>
);
};



export default CardPer;