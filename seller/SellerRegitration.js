import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userservice from '../Services/Userservice';

const SellerRegistration= () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        shopname: '',
        gstn: '',
        pancard: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        Userservice.addSeller(formData).then(res=>{
          const f=true;
          if (res.data===f) {
              alert("Registration Successful")
              window.location.href="/seller/login"
          } else {
              alert("Registration Failed")
              window.location.href="/home/signup"
          }
         
      })
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="shopname" className="form-label">Shop Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="shopname"
                        name="shopname"
                        value={formData.shopname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gstn" className="form-label">GSTN</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gstn"
                        name="gstn"
                        value={formData.gstn}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pancard" className="form-label">PAN Card</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pancard"
                        name="pancard"
                        value={formData.pancard}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SellerRegistration;
