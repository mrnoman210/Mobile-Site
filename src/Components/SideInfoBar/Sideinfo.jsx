import React, { useState, useRef } from "react";
import "./Sideinfo.css";
import { Link } from "react-router-dom";
import Search_By_Component from "../Search_By_Component/Search_By_Component";
import SearchingRanges from "../SearchingRanges/SearchingRanges";

const Sideinfo = () => {
    const [readmore, setReadmore] = useState(true);
      
        return (
    
            <div className="sideinfo_main">
                <div className="innerslideinfo">
                    <Search_By_Component title={"Search By Brand Name"} />
                    <Link to={"/"}> Samsung</Link>
                    <Link to={"/"}> Vivo</Link>
                    <Link to={"/"}> Apple</Link>
                    <Link to={"/"}> Realme</Link>
                    <p
                        className={`${readmore ? "displayclass" : "noneclass"
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
                        className={`${readmore ? "noneclass" : "displayclass"
                            } seemoreBrands_tab`}
                        onClick={() => {
                            setReadmore(!readmore);
                        }}
                    >
                        See Less
                    </p>
                    <Search_By_Component title={"Search By Price"}  />
                    <SearchingRanges specific={ "Price"} extra="Rs." rangecomp= {1000000}/> 
                    <Search_By_Component title={"Search By Processor"} />
                    <SearchingRanges currency={"mhz."} specific={ "Processor"} rangecomp={ 900}/>
                    <Search_By_Component title={"Search By Meomry"} />
                    <SearchingRanges currency={"GB."} specific={"Meomry"} rangecomp={ 32} />
                </div>
            </div>
        );
    
}

export default Sideinfo;
