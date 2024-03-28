import React from "react";

const CardPla = (props) => { 



return (
    <div className="card m-1" style={{ width: "18rem" }}>
    <img src={props.imageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <a href="#" className="btn btn-primary m-2">Go somewhere</a>
      <a href="#" className="btn btn-warning m-2"><i className="fa-regular fa-heart"></i></a>
    </div>
  </div>
);
};



export default CardPla;