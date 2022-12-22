import React from "react";
import "./News.css";
import image1 from "../../Images/image1.jpg";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Vivo Y35m Expected to Launch Imminently; Discovered on Leaks with
            Pricing, Design & Specs Vivo
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Link provid here
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Link provid here
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Link provid here
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Link provid here
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
      <div className="newsMain">
        <img src={image1} alt="Image can't loaded" className="newsImage" />
        <div className="newsDevider">
          <Link to={"/"} className="newslink">
            Link provid here
          </Link>
          <p className="newsParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque illum a laudantium eaque nulla non omnis perferendis cum
            repellendus vitae, dolore beatae minima, tempora accusantium, eius
            harum quis rerum.
          </p>
        </div>
      </div>
    </>
  );
};

export default News;
