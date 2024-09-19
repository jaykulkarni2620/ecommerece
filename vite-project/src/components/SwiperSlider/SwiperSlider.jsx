import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";

const SwipeSlider = ({ products }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      pagination={{ clickable: true }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="item productItem">
            <div className="imgWrapper">
              <img src={product.image} alt={product.title} className="w-100" />
              <span className='badge badge-primary'>{product.badge}</span>
              <div className='actions'>
                <button><TfiFullscreen/></button>
                <button><IoMdHeartEmpty style={{fontSize:"17px"}}/></button>
              </div>
            </div>
            <div className="info">
              <h4>{product.title}</h4>
              <span className={`d-block ${product.inStock ? 'text-success' : 'text-danger'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <Rating className="mt-2 mb-2" name="read-only" value={product.rating.rate} readOnly size="small" />
              <div className="d-flex align-items-center">
                <span className="oldPrice">{product.oldPrice}</span>
                <span className="newPrice text-danger ml-3">Rs{product.price}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
