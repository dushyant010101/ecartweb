import React from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Error from "./components/Pages/Error";
import Footer from "./components/Navbar/Footer";
import Cart from "./components/Pages/Cart";
import Product from "./components/Pages/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="ecartweb/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path=':productId' element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
