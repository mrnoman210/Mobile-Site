import React from "react";
import Cards from "../../Components/Card/Cards";
import Carousal from "../../Components/Carousal/Carousal";
import Sideinfo from "../../Components/SideInfoBar/Sideinfo";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousal />
      <br />
      <div className="main">
        <Sideinfo />
        <Cards />
      </div>
    </>
  );
};

export default Home;
