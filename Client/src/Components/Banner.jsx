import React from "react";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>Your Personal Diet Planner</h1>
        <p>Achieve your health goals with tailored meal plans.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Banner;
