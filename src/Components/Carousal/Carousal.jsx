import React from "react";
import "./Carousal.css"
import image1 from "../../Images/image1.jpg"
import image2 from "../../Images/image2.jpg"
import image3 from "../../Images/image3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousal() {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
    
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow/> ,
   
  };
  return (

    // <>
    //   <Swiper
    //     height={"100px"}
    //     slidesPerView={1}
    //     spaceBetween={30}
    //     loop={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
    //     <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
    //     <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
    //   </Swiper>
    // </>
    <>
        {/* <div className="tag">
          <h1>Image Gallery</h1>
    </div> */}
      <div className="imgslider">
        <Slider {...settings}>
          {/* {images.map((item) => ( */}
            <div key="">
              <img src={image1}  alt="" />
            </div>
            <div key="">
              <img src={image2}  alt="" />
            </div>
            <div key="">
              <img src={image3}  alt="" />
            </div>
          {/* ))} */}
        </Slider>
      </div>
    </>
  //  <div>
  //     <div className="images_main_div">
  //       <img src={image1} className="carousal_image"/>
  //       <img src={image2} className="carousal_image"/>
  //       <img src={image3} className="carousal_image"/>
    
  //     <div className="circles_miandiv">
  //       <FaCircle color="grey" cursor={"pointer"} className="circle_active"></FaCircle>
  //       <FaCircle color="grey" cursor={"pointer"} className="circle_active"></FaCircle>
  //       <FaCircle color="grey" cursor={"pointer"} className="circle_active"></FaCircle>
  //       <FaCircle color="grey" cursor={"pointer"} className="circle_active"></FaCircle>
  //       <FaCircle color="grey" cursor={"pointer"} className="circle_active"></FaCircle>
  //       </div>
  //       <div className="arrows">
  //         <FaChevronLeft size={100} className="leftarrow"></FaChevronLeft>
  //         <FaChevronRight size={100}  className="rightarrow"></FaChevronRight>
  //       </div>
  //     </div>
  //   </div> 
  );
}

export default Carousal;
