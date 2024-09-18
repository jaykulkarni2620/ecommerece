import Homebanner from "../../components/HomeBanner/Homebanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";

const Home = () => {

    var productSliderOption = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };


    return(
       <>
            <Homebanner/>

            <section className="homeproducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                           <div className="banner">
                           <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="err" className="cursor"/>
                           </div>
                        </div>
                        
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-color text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>  
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
                            </div>

                            {/* poduct slider  */}

                            <div className="product_row w-100">
                            <Slider {...productSliderOption}>
                                <div className="item productItem">
                                    <div className="imgWrapper"> 
                                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="" className="w-100"/>
                                    </div>
                                </div>
                            </Slider>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

       </>
    )
}


export default Home;