import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Slider } from "./components/Slider"
import Food from "./components/Food"
import Pet from './components/Pet';
// import Pet from './components/Pet';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import Cloth from './components/Cloth';
import Toys from './components/Toys';
import Access from './components/Access';
import Seller from './components/Seller';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { PrivateComponent } from './components/PrivateCompenent';
// import ProductDetails from './Product/ProductDetails';
// import ProductCard from './Product/ProductCard';
// import ProductPage from './Product/ProductPage';
import SellerAddProduct from './seller/SellerAddProduct';
import SellerBillingPage from './seller/SellerBillingPage';
import SellerDashboard from './seller/SellerDashboard';
import SellerLogin from './seller/SellerLogin';
import SellerRegister from './seller/SellerRegister';
import './Product/PetProduct/PetPages.css'


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/ProductCard' element={<ProductCard />}></Route> */}
        <Route path='/Food' element={<Food />}></Route>
        {/* <Route path='/ProductDetails' element={<ProductDetails />}></Route> */}
        {/* <Route path='/ProductPage' element={<ProductPage />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/Pet' element={<Pet />}></Route>
        <Route path='/Cloth' element={<Cloth />}></Route>
        <Route path='/Toys' element={<Toys />}></Route>
        <Route path='/Access' element={<Access />}></Route>
        {/* <Route path='/Seller' element={<Seller />}></Route> */}

        
        <Route path='/cart' element={<PrivateComponent><Cart /></PrivateComponent>}> </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/register' element={<Register />}> </Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path='/SellerLogin' element={<SellerLogin />}> </Route>
        <Route path='/SellerRegister' element={<SellerRegister />}> </Route>
        
        

        <Route path='/payment' element={<Payment />}> </Route>
        <Route path='/cart/checkout' element={<Checkout />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
