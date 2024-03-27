import React from "react";

const CardPer = () => { 



return (
    <div className="card" style={{ width: "18rem" }}>
    <img src="https://hips.hearstapps.com/hmg-prod/images/luke-skywalker-muerte-guion-original-1602697056.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary m-2">Go somewhere</a>
      <a href="#" className="btn btn-warning m-2"><i className="fa-regular fa-heart"></i></a>
    </div>
  </div>
);
};



export default CardPer;