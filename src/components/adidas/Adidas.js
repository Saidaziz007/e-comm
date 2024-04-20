import React from "react";
import adidasImg from "../../assets/adidas-img.svg";
import "./Adidas.css";

function Adidas() {
  return (
    <div className="adidas-all">
      <div className="container">
        <div className="adidas-1">
          <div className="adidas-left">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <button>SHOP NOW</button>
          </div>
          <div className="adidas-right">
            <img src={adidasImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adidas;
