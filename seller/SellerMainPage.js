import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const SellerMainPage = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>Welcome to Your Online Store!</h1>
            <p>Start selling your products today.</p>
            <Link to="/seller/login"><button className="btn btn-primary btn-lg">Login</button></Link>
            <Link to="/seller/signup"><button className="btn btn-primary btn-lg m-3">Start Selling</button></Link>
            
        </div>
    );
};

export default SellerMainPage;