import React from "react";
import Cards from "../../Components/Card/Cards";
import Sideinfo from "../../Components/SideInfoBar/Sideinfo";

const Home = () => {
  return (
    <>
      {/* <Carousal /> */}
      {/* <br /> */}
      <div className="main">
        <Sideinfo />
        <Cards />
      </div>
    </>
  );
};

export default Home;
