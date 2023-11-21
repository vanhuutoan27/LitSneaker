import React from 'react';
import { Link } from 'react-router-dom';

import './Trending.scss';

function Trending() {
  // Example product data
  const products = [
    {
      ProductName: "MEN'S RUNNING SHOE",
      image: '../images/product-1.png',
      Price: '$20',
    },
    {
      ProductName: 'NIKE AIR MAX E77 SHOE',
      image: '../images/product-2.png',
      Price: '$25',
    },
    {
      ProductName: 'SIMPLE FABRIC SHOE',
      image: '../images/product-3.png',
      Price: '$30',
    },
  ];

  return (
    <div className="trending-wrapper">
      <div className="trending-container content">
        <div className="trending-header">
          <h2 className="trending-title">Trending Products</h2>
          <div className="trending-header-btn">
            <Link className="btn">Explore More</Link>
          </div>
        </div>

        <div className="trending-products">
          {products.map((product) => (
            <div className="trending-product">
              <div className="trending-product-img">
                <img src={product.image} alt={product.ProductName} />
              </div>
              <h3>{product.ProductName}</h3>
              <div className="trending-product-price">
                <span className="original-price">{product.Price}</span>
              </div>
              <div className="trending-product-btn">
                <Link className="btn">Add To Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
