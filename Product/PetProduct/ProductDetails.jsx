
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const handleCart=()=>
  {
    localStorage.setItem("CartItem", JSON.stringify({title: product.title,price:product.price}) )
  }
  return (
    <div className="product-details">
      <div className="product-details-card-container">
        <div className="product-details-card">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>
          <div className="button-container">
            <button className="add-to-cart-button" onClick={handleCart}>Add to Cart</button>
            <button className="buy-now-button" >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

