import React from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import Adidas from "../../components/adidas/Adidas";
import Cards from "../../components/cards/Cards";

function Home() {
  return (
    <section>
      <div className="hero">
        <div className="container">
          <div className="hero-left">
            <h1>Super Flash Sale 50% Off</h1>
          </div>
        </div>
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="adidas">
        <Adidas />
      </div>
    </section>
  );
}

export default Home;
