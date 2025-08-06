import React from 'react'
import "./Header.css"; 
import Amazon from "../assets/amazon.png";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    return (
        <>
            <div className="Header-container">
                <div className="image">
                    <img src={Amazon} alt="" />
                </div>
                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/products">product</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart" >Go to cart</Link>
                </div>
            </div>
        </>

    )
}

export default Header