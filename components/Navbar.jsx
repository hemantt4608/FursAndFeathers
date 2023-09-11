import React from 'react'
import "./Navbar.css"
import { BsFillHeartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillBagPlusFill } from 'react-icons/bs';
import logo from './Images/logo3.png'

import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom"



const Navbar = () => {
    return (

        <div>
            <div className="image"><img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="image1" /></div>
            <div className="middle">
                <div className="logo">
                    <Link to="/">   <div><img src={logo} alt="logo" /></div></Link>
                </div>
              
                   <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    {/* <b className='tittle'>FURS & FEATHERS</b> */}
                        <b className='fus'>FURS & FEATHERS</b>
                    </Link>
              

                <div className="search">
                    <div className="left">
                        <div>
                            <Link to="/Pet">
                            <select id="select">
                            <option value="All">All Categories</option>
                            <option value="Pet">Pets</option>
                            <option value="Pet1">Dog</option>
                            <option value="Pet2">Cat</option>
                            <option value="Pet3">Bird</option>
                            <option value="Pet4">Fish</option>
                            </select>
                            </Link>
                        </div>
                    </div>

                    <di className="line"></di>

                    <div className="right">
                        <input className="text" type="text" placeholder="Enter Your Search..." />
                        <button className="icon1"><div><FaSearch /></div></button>
                    </div>
                </div>

                <div className="account">
                    <button className="icon2"><BsFillHeartFill /></button>
                    <Link to="./login">   <button className="icon3"><BsFillPersonFill /></button></Link>
                    <div className="ac"><a href="./login">My Account</a></div>
                </div>
            </div>
            <div className="nav">
                <div className="sidebar">
                    <ul >
                        <Link to="/">   <li className="active btn">HOME</li></Link>
                        <Link to="/Pet" ><li className="btn">PETS</li></Link>
                        <Link to="/Cloth">   <li className="btn">CLOTHES</li></Link>
                        <Link to="/Toys">  <li className="btn">TOYS</li></Link>
                        <Link to="/Food">  <li className="btn">FOOD</li></Link>
                        <Link to="/Access">  <li className="btn">ACCESSORIES</li></Link>
                        <Link to="/SellerLogin">  <li className="btn">BECOME A SELLER </li></Link>

                    </ul>
                </div>
                <div class="mycart active btn"><Link to="/cart"> MY CART</Link> </div>

            </div>
        </div>
    )
}

export default Navbar
