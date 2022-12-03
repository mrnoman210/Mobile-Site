import React, { useRef, useState } from "react";
import "./SearchingRanges.css";
const SearchingRanges = ({ currency, specific, rangecomp, extra }) => {
  const range = useRef(null);
  const [displayprice, setDisplayprice] = useState(0);

  return (
    <div className="specific_main">
      <h4 className="specific">{specific}</h4>
      <input
        type="range"
        id="rangeInput"
        ref={range}
        value={displayprice}
        min={0}
        max={rangecomp}
        onChange={() => {
          setDisplayprice(range.current.value);
        }}
      />
      <p name="displayrange">
        {extra} {displayprice} {currency}
      </p>
    </div>
  );
};

export default SearchingRanges;
