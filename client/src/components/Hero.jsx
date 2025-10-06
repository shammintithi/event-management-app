import React from "react";
import homeImg from "./assets/Images/home.jpg";

function Home() {
  return (
    <section className="hero">
      <img src={homeImg} alt="Home" className="home-img" />
      <div className="hero-content">
        <h1>Welcome to HappenHub</h1>
        <p>Discover amazing events happening around you</p>
      </div>
    </section>
  );
}

export default Home;
