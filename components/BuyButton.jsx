import React, { useState } from 'react';

const BuyProduct = ({ name, price }) => {
  const [cartItems, setCartItems] = useState([]);
const BuyPro=[price,name]
  const handleBuyNowClick = () => {
    // Simulate buying the item immediately
    // localStorage.setItem("Buy",BuyPro)
    alert(`You bought ${name} for ${price}`);
  };

  const handleAddToCartClick = () => {
    // Add the item to the cart
    setCartItems([...cartItems, { name, price }]);
    alert(`${name} added to cart`);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={handleBuyNowClick}>Buy Now</button>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>BuyProduct Page</h1>
      {/* <BuyProduct name="BuyProduct A" price={10} />
      <BuyProduct name="BuyProduct B" price={20} /> */}
    </div>
  );
};

export default App;