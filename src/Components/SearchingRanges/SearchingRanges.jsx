import React, { useRef, useState } from "react";
import "./SearchingRanges.css";
const SearchingRanges = ({
  currency,
  specific,
  rangecomp,
  extra,
  value,
  changestate,
  displayprices,
  name,
}) => {
  // const range = useRef(null);
  // const [displayprice, setDisplayprice] = useState(0);

  return (
    <div className="specific_main">
      <h4 className="specific">{specific}</h4>
      <input
        type="range"
        id="rangeInput"
        // ref={range}
        // value={value}
        min={0}
        max={rangecomp}
        onChange={changestate}
        name={name}
      />
      <p name="displayrange">
        {extra} {displayprices} {currency}
      </p>
    </div>
  );
};

export default SearchingRanges;
