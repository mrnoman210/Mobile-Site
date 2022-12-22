import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaBars,
  FaBlog,
  FaHome,
  FaMobileAlt,
  FaNewspaper,
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
          title="Home"
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
          title="Shop"
        >
          <Link to={"/news"} class="forLinks header_Links linkClass">
            <FaNewspaper></FaNewspaper> News
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("contact");
          }}
          title="Contact Us"
        >
          <Link to={"/contact-us"} class="forLinks header_Links linkClass">
            <FaAddressBook></FaAddressBook> Contact Us
          </Link>
        </li>
        <li
          class={`forList`}
          onClick={() => {
            setBgcolor("about");
          }}
          title="About Us"
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
          title="Blog"
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
