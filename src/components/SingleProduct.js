import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const SingleProduct = (props) => {
    const { product } = props;
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div key={product.id} className="product">
            <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <div className="product-info">
                    <p className="product-title">Title: {product.title}</p>
                    <p className="product-description">Description: {product.description.length > 14 ? 
                    product.description.substring(0, 14) + "..." : product.description}</p>
                    <p className="product-price">Price: {product.price}</p>
                    <Rating name="read-only" value={product.rating} readOnly />
                </div>
            </Link>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default SingleProduct;
