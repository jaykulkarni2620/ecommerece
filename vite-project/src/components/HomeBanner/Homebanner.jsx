import React from "react";
import Slider from "react-slick";

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
                    <img src="https://cmsimages.shoppersstop.com/main_banner_web_Biba_fashor_and_more_920831b24d/main_banner_web_Biba_fashor_and_more_920831b24d.png" className="w-100" alt="Banner 1" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/main_banner_web_Burberry_Versace_and_more_6089f47209/main_banner_web_Burberry_Versace_and_more_6089f47209.png" className="w-100" alt="Banner 1" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/main_banner_web_Fossil_michael_kors_and_more_a12056fe6e/main_banner_web_Fossil_michael_kors_and_more_a12056fe6e.png" className="w-100" alt="Banner 1" />
                </div>
            </Slider>
        </div>
    );
}

export default Homebanner;
