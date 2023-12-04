import "./App.css";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VlogDetails from "./Components/vlog/VlogDetails";
import Contact from "./Components/Contact/Contact";
import Footer from "./Common/footer/Footer";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import WhatsApp from "./Common/WhatsApp/WhatsApp";
import ForgotPass from "./Components/login/ForgotPass";
import Terms from "./Components/Terms&Conditions/Terms";
import Privacy from "./Components/privacy/Privacy";
import Refund from "./Components/refund/Refund";
import Shipping from "./Components/shipping/Shipping";
import Review from "./Components/review/Review";
import TrackOrder from "./Components/trackOrder/TrackOrder";
import Vlog from "./Components/vlog/Vlog";
import Products from "./Components/products/Products";
import SingleProduct from "./Components/products/SingleProduct";
import Checkout from "./Components/checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<SingleProduct />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/review" element={<Review />} />
          <Route path="/blogs" element={<Vlog />} />
          <Route path="/blog-details/:id" element={<VlogDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/start-checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <WhatsApp />
      </Router>
    </>
  );
}

export default App;
