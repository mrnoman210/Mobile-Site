import React, { useState, useRef } from "react";
import "./Sideinfo.css";
import { Link } from "react-router-dom";
import Search_By_Component from "../Search_By_Component/Search_By_Component";
import SearchingRanges from "../SearchingRanges/SearchingRanges";
import Button from "../../Button/Button";
import { FaBolt, FaSearch } from "react-icons/fa";

const Sideinfo = () => {
  // const range = useRef(0);
  const [displayprice, setDisplayprice] = useState({
    processor: "",
    price: "",
    memory: "",
  });
  const [readmore, setReadmore] = useState(true);
  // const [getInfo, setGetInfo] = useState({});
  function changestate(e) {
    setDisplayprice({ ...displayprice, [e.target.name]: e.target.value });
  }
  // -==-------------------000000000000000000000000
  function collectData() {
    console.log(displayprice);
  }
  return (
    <div className="sideinfo_main">
      <div className="innerslideinfo">
        <Search_By_Component title={"Search By Brand Name"} />
        <Link to={"/"}> Samsung</Link>
        <Link to={"/"}> Vivo</Link>
        <Link to={"/"}> Apple</Link>
        <Link to={"/"}> Realme</Link>
        <p
          className={`${
            readmore ? "displayclass" : "noneclass"
          } seemoreBrands_tab`}
          onClick={() => {
            setReadmore(!readmore);
          }}
        >
          See More
        </p>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Readme
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Oppo
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Infinix
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Huawei
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Honor
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          Techno
        </Link>
        <Link to={"/"} className={`${readmore ? "noneclass" : "displayclass"}`}>
          HTC
        </Link>
        <p
          className={`${
            readmore ? "noneclass" : "displayclass"
          } seemoreBrands_tab`}
          onClick={() => {
            setReadmore(!readmore);
          }}
        >
          See Less
        </p>
        <Search_By_Component title={"Search By Price"} />
        <SearchingRanges
          specific={"Price"}
          extra="Rs."
          rangecomp={1000000}
          // ref={range}
          name={"price"}
          value={displayprice}
          displayprices={displayprice.price}
          changestate={changestate}
        />
        <Search_By_Component title={"Search By Processor"} />
        <SearchingRanges
          currency={"mhz."}
          specific={"Processor"}
          rangecomp={900}
          name={"processor"}
          // ref={range}
          displayprices={displayprice.processor}
          changestate={changestate}
        />
        <Search_By_Component title={"Search By Meomry"} />
        <SearchingRanges
          currency={"GB."}
          specific={"Meomry"}
          rangecomp={32}
          // ref={range}
          name={"memory"}
          displayprices={displayprice.memory}
          changestate={changestate}
        />
      </div>
      <div className="buttons">
        <Button
          text={"Search"}
          myfunction={collectData}
          icon={<FaSearch></FaSearch>}
        />
        <Link to={"/advanceSearch"}>
          <Button text={"Advance Search"} icon={<FaBolt></FaBolt>} />
        </Link>
      </div>
    </div>
  );
};

export default Sideinfo;
