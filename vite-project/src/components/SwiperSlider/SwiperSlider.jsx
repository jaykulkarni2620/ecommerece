import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "@mui/material/Button";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from '../../context/CartContext';


const SwipeSlider = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get addToCart from context

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product); // Add the product to the cart
    navigate('/cart'); // Navigate to the cart page
  };

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
          <div 
            className="item productItem" 
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="imgWrapper">
              <img src={product.image} alt={product.title} className="w-100" />
              <span className='badge badge-primary'>{product.badge}</span>
              <div className='actions'>
                <button><TfiFullscreen /></button>
                <button><IoMdHeartEmpty style={{ fontSize: "17px" }} /></button>
              </div>
            </div>
            <div className="info d-flex flex-column">
              <h4>{product.title}</h4>
              <span className={`d-block ${product.inStock ? 'text-success' : 'text-danger'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <div className='forRatingCenter'>
              <Rating className="mt-2 mb-2" name="read-only" value={product.rating.rate} readOnly size="small" />
              </div>
              <div>
                <span className="oldPrice">{product.oldPrice}</span>
                <span className="newPrice text-danger ml-3">Rs{product.price}</span>
                <Button onClick={(event) => handleAddToCart(event, product)}>Add To Cart</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
