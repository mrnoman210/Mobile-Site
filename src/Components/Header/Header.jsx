import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaBars,
  FaBlog,
  FaHome,
  FaMobileAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
// import {  } from 'react-icons/';
const Header = () => {
  // const [bgcolor, setBgcolor] = useState("");
  return (
    <header>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <FaBars></FaBars>
      </label>
      <label for="" class="logoWebsite">
       <FaMobileAlt></FaMobileAlt> Logo
      </label>
      <ul>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("home");
          }}
        >
          <Link to={"/"} class="forLinks header_Links linkClass">
            <FaHome></FaHome> Home
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("shop");
          }}
        >
          <Link to={"/"} class="forLinks header_Links linkClass">
            <FaShoppingCart></FaShoppingCart> Shop
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("contact");
          }}
        >
          <Link to={"/"} class="forLinks header_Links linkClass">
            <FaAddressBook></FaAddressBook> Contact Us
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("about");
          }}
        >
          <Link to={"/aboutus"} class="forLinks header_Links linkClass">
            <FaUser></FaUser> About Us
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("blog");
          }}
        >
          <Link to={"/"} class="forLinks header_Links linkClass">
            <FaBlog></FaBlog> Blog
          </Link>
        </li>
        {/* <li class="forList header_Links search_area">
        <FaSearch></FaSearch>
          </li> */}
      </ul>
    </header>
  );
};

export default Header;
