import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../ProductCustomer/ProductDetails/ProductDetails";
import Product from "../ProductCustomer/Product/Product";
import Contact from "../Pages/Contact";
// import TearmsCondition from "../Pages/TearmsCondition";
// import PrivacyPolicy from "../Pages/PrivacyPolicy";
// import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../Navbar/Navigation";
import Cart from "../Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customTheme, customerTheme } from "../them/customeThem";
import Order from "../orders/Order";
import OrderDetails from "../orders/OrderDetails";
import Checkout from "../Checkout/Checkout";
// import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../paymentSuccess/PaymentSuccess";
// import RateProduct from "../customer/Components/ReviewProduct/RateProduct";

const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<Homepage />}></Route>
     <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
        {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        {/* <Route path="/account/rate/:productId" element={<RateProduct />}></Route> */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer/> */}
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
