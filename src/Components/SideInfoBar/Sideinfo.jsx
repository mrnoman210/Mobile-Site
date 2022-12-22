import React, { useState, useRef } from "react";
import "./Sideinfo.css";
import { Link } from "react-router-dom";
import Search_By_Component from "../Search_By_Component/Search_By_Component";
import SearchingRanges from "../SearchingRanges/SearchingRanges";
import Button from "../../Button/Button";
import { FaBolt, FaList, FaSearch } from "react-icons/fa";

const Sideinfo = () => {
  // const range = useRef(0);
  const [displayprice, setDisplayprice] = useState({
    brands: [],
    processor: "",
    price: "",
    memory: "",
  });
  const [closeSideInfo, setCloseSideInfo] = useState(false);
  const [readmore, setReadmore] = useState(true);
  // const [getInfo, setGetInfo] = useState({});
  function changestate(e) {
    setDisplayprice({ ...displayprice, [e.target.name]: e.target.value });
  }
  // -==-------------------000000000000000000000000
  function collectData() {
    console.log(displayprice);
  }
  function closeSide() {
    setCloseSideInfo((current) => !current);
    console.log(closeSideInfo);
  }
  function displaydiv(e) {
    let brands = displayprice.brands;
    brands.push(e.currentTarget.id);
    setDisplayprice({
      ...displayprice,
      brands,
    });
  }
  return (
    <>
      <div
        className={`sideinfo_main ${
          closeSideInfo ? "drawerside" : "drawerredo"
        }`}
      >
        <h3 onClick={closeSide} className={"closeSideInfo"}>
          <FaList></FaList>
        </h3>
        <div className="innerslideinfo hidden">
          <Search_By_Component title={"Search By Brand Name"} />
          <text
            id="samsung"
            name="samusung"
            onClick={displaydiv}
            className={"displayClass"}
          >
            Samsung
          </text>
          <text
            id="vivo"
            name="vivo"
            onClick={displaydiv}
            className={"displayClass"}
          >
            Vivo
          </text>
          <text
            id="apple"
            name="apple"
            onClick={displaydiv}
            className={"displayClass"}
          >
            Apple
          </text>
          <text
            id="realme"
            name="realme"
            onClick={displaydiv}
            className={"displayClass"}
          >
            Realme
          </text>
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

          <Link
            // to={"/"}
            name={"brands"}
            value={"Redme"}
            // onClick={changestate}

            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
            Readme
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
            // onClick={() => changestate}
          >
            Oppo
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
            Infinix
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
            Huawei
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
            Honor
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
            Techno
          </Link>
          <Link
            to={"/"}
            className={`${readmore ? "noneclass" : "displayclass"}`}
          >
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
    </>
  );
};

export default Sideinfo;
