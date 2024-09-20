import React, { useState } from "react";
import './ShopPages.css'

// Sample data for products (You can fetch from an API instead)
const products = [
  {
    id: 1,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 7.25,
    originalPrice: 9.35,
    discount: "23%",
    inStock: true,
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-27-346x310.jpg",
  },
  {
    id: 2,
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: "24%",
    inStock: true,
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
  },
  {
    id: 3,
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: "24%",
    inStock: true,
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
  },
  {
    id: 4,
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: "24%",
    inStock: true,
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
  },
  {
    id: 5,
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: "24%",
    inStock: true,
    image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
  },
  // Add more products as needed
];

const ShopPage = () => {
  const [filterPrice, setFilterPrice] = useState([0, 70]);

  const handlePriceFilterChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setFilterPrice([0, value]);
  };

  return (
    <div className="shop-page">
      <div className="container">
      <div className="row">


    
      <div className="sidebar col-md-3">
        <h3>Product Categories</h3>
        <ul>
        <li><input type="checkbox" /> Beverages</li>
        <li><input type="checkbox" /> Biscuits & Snacks</li>
        <li><input type="checkbox" /> Breads & Bakery</li>
        <li><input type="checkbox" /> Breakfast & Dairy</li>
        <li><input type="checkbox" /> Frozen Foods</li>
        <li><input type="checkbox" /> Fruits & Vegetables</li>
        <li><input type="checkbox" /> Grocery & Staples</li>
        <li><input type="checkbox" /> Household Needs</li>
        <li><input type="checkbox" /> Meats & Seafood</li>
        </ul>

        <div className="filter-section">
          <h4>Filter by Price</h4>
          <input
            type="range"
            min="0"
            max="70"
            value={filterPrice[1]}
            onChange={handlePriceFilterChange}
          />
          <p>Price: ${filterPrice[0]} — ${filterPrice[1]}</p>
        </div>

        <div className="product-status">
          <h4>Product Status</h4>
          <label>
            <input type="checkbox" /> In Stock
          </label>
          <label>
            <input type="checkbox" /> On Sale
          </label>
        </div>

        <div className="brands">
          <h4>Brands</h4>
          <ul>
            <li>Frito Lay (10)</li>
            <li>Nespresso (11)</li>
            <li>Oreo (9)</li>
            {/* Add more brands as needed */}
          </ul>
        </div>
      </div>

      <div className="product-grid col-md-9">
        <div>
          <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" alt="" />
        </div>
        {/* <div className="sort-options">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort">
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div> */}

{/*  */}

<div className="before-shop-loop">
      <div className="shop-view-selector">
        <a href="/bacola/shop/?orderby=popularity&filter_cat=32&_pjax=.site-content&shop_view=list_view" className="shop-view">
          <i className="klbth-icon-list-grid"></i>
        </a>
        <a href="/bacola/shop/?orderby=popularity&filter_cat=32&_pjax=.site-content&column=2&shop_view=grid_view" className="shop-view">
          <i className="klbth-icon-2-grid"></i>
        </a>
        <a href="/bacola/shop/?orderby=popularity&filter_cat=32&_pjax=.site-content&column=3&shop_view=grid_view" className="shop-view">
          <i className="klbth-icon-3-grid"></i>
        </a>
        <a href="/bacola/shop/?orderby=popularity&filter_cat=32&_pjax=.site-content&column=4&shop_view=grid_view" className="shop-view active">
          <i className="klbth-icon-4-grid"></i>
        </a>
      </div>

      {/* For get orderby from loop */}
      <form className="woocommerce-ordering product-filter" method="get">
        <span className="orderby-label hide-desktop">Sort by</span>
        <select
          name="orderby"
          className="orderby filterSelect"
          aria-label="Shop order"
        >
          <option value="popularity" selected>
            Sort by popularity
          </option>
          <option value="rating">Sort by average rating</option>
          <option value="date">Sort by latest</option>
          <option value="price">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
        <input type="hidden" name="paged" value="1" />
        <input type="hidden" name="filter_cat" value="32" />
        <input type="hidden" name="_pjax" value=".site-content" />
      </form>

      {/* For perpage option */}
      <form className="products-per-page product-filter" method="get">
        <span className="perpage-label">Show</span>
        <select name="perpage" className="perpage filterSelect">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
        <input type="hidden" name="orderby" value="popularity" />
        <input type="hidden" name="filter_cat" value="32" />
        <input type="hidden" name="_pjax" value=".site-content" />
      </form>
    </div>


        <div className="product-list">
          {products
            .filter((product) => product.price <= filterPrice[1])
            .map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>
                    <span className="original-price">${product.originalPrice}</span>{" "}
                    <span className="discount">{product.discount}</span>
                  </p>
                  <p>${product.price}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
        </div>

      </div>
      </div>
      </div>
    </div>
  );
};

export default ShopPage;
