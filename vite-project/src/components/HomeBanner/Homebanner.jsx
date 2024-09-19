import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";

const Homebanner = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg" className="w-100" alt="Banner 1" />
            <div className="bannerText">
              <h1 className="font-weight-bold pt-2">A Different Type Of<br/>Grocery Store!</h1>
              <p className="pt-2 pb-2">Only This Week, Don’t Miss...</p>
              <p className="d-flex align-items-center pt-2" >from <h3 className="text-danger">$14.35</h3></p>
              <button className="homebanner_btn mt-3">Shop Now<IoIosArrowRoundForward /></button>
            </div>
          </div>
          <div className="item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg" className="w-100" alt="Banner 1" />
            <div className="bannerText">
              <h1 className="font-weight-bold pt-2">A Different Type Of<br/>Grocery Store!</h1>
              <p className="pt-2 pb-2">Only This Week, Don’t Miss...</p>
              <p className="d-flex align-items-center pt-2" >from <h3 className="text-danger">$14.35</h3></p>
              <button className="homebanner_btn mt-3">Shop Now<IoIosArrowRoundForward /></button>
            </div>
          </div>
          <div className="item">
            <img src="https://cmsimages.shoppersstop.com/main_banner_web_Fossil_michael_kors_and_more_a12056fe6e/main_banner_web_Fossil_michael_kors_and_more_a12056fe6e.png" className="w-100" alt="Banner 1" />
          </div>
        </Slider>
      </div>
      
    );
}

export default Homebanner;
