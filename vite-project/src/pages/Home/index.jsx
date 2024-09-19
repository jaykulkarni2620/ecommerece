import React, { useState, useEffect } from 'react';
import Homebanner from "../../components/HomeBanner/Homebanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import SwipeSlider from "../../components/SwiperSlider/SwiperSlider";
import { RiMobileDownloadLine } from "react-icons/ri";
import Advertise from "/img/banner-box2.webp";
import { FcAlarmClock } from "react-icons/fc";
import { SlWallet } from "react-icons/sl";
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Homebanner />

      <section className="homeproducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner d-flex flex-column">
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt="err" className="cursor mb-5" />
                <div className="banner_two">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" alt="err" className="cursor mb-5" />
                </div>
                <div className="iconboxes-widget mb-5">
                  <div className="item d-flex">
                    <div className="icon">
                      <span><RiMobileDownloadLine /></span>
                    </div>
                    <div className="text p-2">
                      <p>Download the Bacola App to your Phone.</p>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div className="icon">
                      <span><FcAlarmClock /></span>
                    </div>
                    <div className="text p-2">
                      <p>Download the Bacola App to your Phone.</p>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div className="icon">
                      <span><SlWallet /></span>
                    </div>
                    <div className="text p-2">
                      <p>Download the Bacola App to your Phone.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-color text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>  
                <Button className="viewAllBtn ml-auto" >
                  View All<IoIosArrowRoundForward />
                </Button>
              </div>

              {/* Product slider */}
              <div className="product_row w-100 mt-4 mb-4">
                <SwipeSlider products={products} />
              </div>
              <div className="banner-wrapper">
                <div className="banner-content d-flex">
                  <div className="text-container">
                    <h5 className="sub-text color-info-dark">
                      <p className="color-text-lighter">Always Taking Care</p>
                      <span>In store or online your health &amp; safety is our top priority</span>    
                    </h5>
                  </div>
                  <div className="adv">
                    <img src={Advertise} alt="Advertise Banner" />
                  </div>
                </div>
              </div>

              {/* HOT PRODUCT FOR THIS WEEK */}
              <div className="info">
                <h3 className="mb-0 hd">HOT PRODUCT FOR <span className="text-danger">THIS WEEK</span></h3>
                <p className="text-color text-sml mb-0">Don't miss this opportunity at a special discount just for this week.</p>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
