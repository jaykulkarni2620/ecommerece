import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'; // Adjust the path if necessary



const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      console.log(response.data); // Log the entire response
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='full-page'>
    <div className="product-page">
    <div className="breadcrumb">
      <a href="#">Home</a> {'>'} <a href="#">Meats & Seafood</a> {'>'} <span>All Natural Italian-Style Chicken Meatballs</span>
    </div>

    <div className="product-container ">
      <div className="product-images">
        <img src={product.image} alt="Italian-Style Chicken Meatballs" className="main-image" />
        <div className="thumbnail-container">
          <img src={product.image} alt="thumbnail 1" className="thumbnail" />
          <img src="path-to-image-thumbnail2.jpg" alt="thumbnail 2" className="thumbnail" />
          <img src="path-to-image-thumbnail3.jpg" alt="thumbnail 3" className="thumbnail" />
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-brand">Brand: <span>Welch's</span></div>
        <div className="product-review">{product.rating.rate}<span>1 REVIEW</span></div>
        <div className="sku">SKU: ZU49VOR</div>

        <div className="price-section">
          <span className="old-price">$9.35</span>
          <span className="new-price">{product.price}</span>
          <span className="discount">23% OFF</span>
        </div>

        <p className="description">
        {product.description}
        </p>

        <div className="availability">In Stock</div>

        <div className="quantity-section">
          <button className="quantity-btn">-</button>
          <span className="quantity">1</span>
          <button className="quantity-btn">+</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="extra-info">
          <ul>
            <li>Type: Organic</li>
            <li>MFG: Jun 4, 2021</li>
            <li>LIFE: 30 days</li>
          </ul>
        </div>

        <div className="shipping-info">
          <div>Free Shipping on orders over $100</div>
          <div>Guaranteed 100% Organic</div>
          <div>1 Day Returns</div>
        </div>

        <div className="social-share">
          <span>Share: </span>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    {/*  */}
    {/* New section for description and related products */}
    <div className="product-details-section">
        <div className="tabs">
          <button className="tab active">Description</button>
          <button className="tab">Additional Information</button>
          <button className="tab">Reviews (1)</button>
        </div>

        <div className="description-content">
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. 
            Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. 
            Nulla ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam 
            aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
          <p>
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam 
            dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum 
            sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean 
            vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, 
            sit amet consequat nulla felis pharetra lacus.
          </p>
        </div>

        <div className="related-products-section">
          <h2>Related Products</h2>
          <div className="related-products">
            <div className="related-product">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-19-346x310.jpg" alt="Texas Rio Red Grapefruit" />
              <h6>Texas Rio Red Grapefruit</h6>
              <p className="price-section">
                <span className="old-price">$7.50</span>
                <span className="new-price">$4.50</span>
                <span className="discount">48% OFF</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="related-product">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-4-346x310.jpg" alt="Warrior Blend Organic" />
              <h6>Warrior Blend Organic</h6>
              <p className="price-section">
                <span className="old-price">$39.00</span>
                <span className="new-price">$29.00</span>
                <span className="discount">26% OFF</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="related-product">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg" alt="Organic 100% Grassfed Beef" />
              <h6>Organic 100% Grassfed </h6>
              <p className="price-section">
                <span className="new-price">$5.99</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="related-product">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg" alt="Fresh Organic Strawberry" />
              <h6>Fresh Organic Strawberry</h6>
              <p className="price-section">
                <span className="old-price">$12.00</span>
                <span className="new-price">$9.00</span>
                <span className="discount">25% OFF</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  );
};

export default ProductDetails;
