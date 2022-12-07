import React from "react";
import "./Carousal.css"
import image1 from "../../Images/image1.jpg"
import image2 from "../../Images/image2.jpg"
import image3 from "../../Images/image3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousal() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          <div key="">
            <img src={image1} alt="" />
          </div>
          <div key="">
            <img src={image2} alt="" />
          </div>
          <div key="">
            <img src={image3} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousal;
