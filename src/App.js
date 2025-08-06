import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Cart/CheckOut';
import ErrorPage from './pages/Error/ErrorPage';
import SingleProductPage from './pages/Products/Product/SingleProductPage';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
