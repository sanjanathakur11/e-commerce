import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Rating } from '@mui/material';
import '../Products.css';
import './SingleProductPage.css';
import { useCart } from '../../../context/CartContext';

const SingleProductPage = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                    toast.success("Data fetched successfully");
                })
                .catch((err) => {
                    toast.error(err.message);
                    setLoading(false);
                });
        };
        fetchData();
    }, [id]);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(data, quantity);
            toast.success('Added to cart successfully');
        } else {
            toast.error('Please select a valid quantity');
        }
    };

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="product-container">
                    <div className="thumbnail">
                        <img src={data.thumbnail} alt={data.title} />
                    </div>
                    <div className="product-details">
                        <h1>{data.title}</h1>
                        <div>{data.description}</div>
                        <div className="single">
                            <div>Brand: {data.brand}</div>
                            <div>Category: {data.category}</div>
                        </div>
                        <div className="rate">
                            <Rating name="read-only" value={data.rating} readOnly />
                            <div>{data.rating}</div>
                        </div>
                        <div className="price">Rs. {data.price}</div>
                        <div className="quantity-control">
                            <button 
                                id="decrease" 
                                onClick={handleDecrease} 
                                className="small-button"
                                disabled={quantity === 0}
                            >
                                -
                            </button>
                            <input 
                                id="number" 
                                type="number" 
                                value={quantity} 
                                readOnly 
                                className="small-input" 
                            />
                            <button 
                                id="increase" 
                                onClick={handleIncrease} 
                                className="small-button"
                            >
                                +
                            </button>
                        </div>
                        <div className="cart-actions">
                            <button 
                                onClick={handleAddToCart} 
                                className="add-to-cart-button"
                                disabled={quantity === 0}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleProductPage;