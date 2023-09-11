import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
       <div className="footertext" style={{overflow: "left", marginleft: "20px", fontweight:"lighter",textAlign:"left" }}>

{/* <button onclick="myFunction()" classNmae="myBtn">Read more</button> */}
</div>
<div className="contu">
    <div className="footer">
        <div className="con">
            <div>
                <h3>CONTACT INFO</h3>
            </div>
            <div>
                <ul>
                    <li className="phone"> (+91) 95790 28428</li>
                    <li className="email">support@fersandfeathers.com</li>
                    <li className="time">Open time: 10:00AM - 7:00PM</li>
                </ul>
            </div>
            <div className="socials-wrap">
                <div className="title-follow"></div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/FersAndFeathers-339715696750230/" target="_blank"><i
                                className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/FersAndFeathersofficial/" target="_blank"><i
                                className="fab fa-instagram"></i></a>
                    </li>

                </ul>
            </div>
        </div>
        <div>
            <div>
                <h3>QUICK LINKS</h3>
            </div>
            <div>
                <ul className="links">
                    <li><a href="aboutUs.html">About us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="tearmAndCondition.html">Terms & Conditions</a></li>
                    <li><a href="privacyPolicy.html">Privacy Policy</a></li>
                    <li><a href="">Return and Refund Policy</a></li>
                    <li><a href="shippingPolicy.html">Shipping Policy</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h3>CUSTOMER INFO</h3>
            </div>
            <div>
                <ul className="links">
                    <li><a href="myAccountSection2.0.1.html">My Account</a> </li>
                    <li><a href="trackYourOrder2.0.1.html">Track your Order</a></li>
                    <li><a href="orderReturn2.0.1.html">Order Returns</a></li>
                    <li><a href="WishList.html">Wishlist</a></li>
                    <li><a href="news&Event2.0.1.html">News & Events</a></li>
                    <li><a href="FAQ2.0.1.html">FAQ</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h3>CATOGERIES</h3>
            </div>
            <div>
                <ul className="links">
                    <li>
                        <div className=""><a href="makeup.html"><span>Dogs</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="skin1.html"><span>Cats</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="hair.html"><span>Fish</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="makeup.html"><span>Birds</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="skin1.html"><span>Clothes</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="hair.html"><span>Toys</span></a></div>
                    </li>
                    <li>
                        <div className=""><a href="makeup.html"><span>Accessories</span></a></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr/>
    <div className="dfooter">
        <div className="paymethod">
            <img src="https://www.fursandfeathers.com/pub/media/wysiwyg/payment.png" alt=""/>
        </div>
        <div className="newsletter">
            <h3>Signup for newsletter</h3>
            <input type="email" name="" className="email" placeholder="Enter your Email"/>
            <input type="submit" className="subs" value="Subscribe"/>
        </div>
    </div>
</div>
</div>

  )
}

export default Footer
