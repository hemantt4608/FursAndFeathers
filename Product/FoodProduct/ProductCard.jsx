

import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
        <h3 className="product-name">{product.name}</h3>
        <p>₹{product.price.toFixed(2)}</p>
        </div>
    </div>
  );
}

export default ProductCard;


