import React, { useState } from 'react';

const SellerShopRegistration = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    location: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions here, like sending data to a server.
  };

  return (
    <div className="container mt-5">
      <h2>Seller Shop Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="shopName" className="form-label">
            Shop Name
          </label>
          <input
            type="text"
            className="form-control"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register Shop
        </button>
      </form>
    </div>
  );
};

export default SellerShopRegistration;