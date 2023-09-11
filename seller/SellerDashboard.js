import React from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Seller Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Shop Information</h5>
              <p className="card-text">Shop Name: My Shop</p>
              <p className="card-text">Location: City, Country</p>
              <p className="card-text">Category: Clothing</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">You have 5 new orders.</p>
              {/* Display order details, history, etc. */}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Product</h5>
              <p className="card-text">You have 5 new orders.</p>
              {/* Display order details, history, etc. */}
              <Link to="/seller/addproduct" className="btn btn-primary">Add Product</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;