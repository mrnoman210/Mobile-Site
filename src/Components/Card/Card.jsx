import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ productname, image, price, id , heading}) => {
  // console.log(items);
  return (
    <>
      <Link to={`id:${id}`} className="main_card">
        <h1 className="heading_Name_card">{productname}</h1>
        <img src={image} alt="" className="card_image" />
        <p><b>Price</b> Rs.{price}</p>
      </Link>
    </>
  );
};

export default Card;
