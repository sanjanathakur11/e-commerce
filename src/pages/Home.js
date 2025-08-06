import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Supersale from "../assets/supersale.png";
import SingleProduct from '../components/SingleProduct';
import axios from 'axios';
// import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=8&skip=10')
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleStartShopping = () => {
    navigate('/products');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      </AppBar>
      <img src={Supersale} width="100%" height="500px" alt="Super Sale Banner" />
      <div>
        <div className="bottom">
          <center><h3>Shop the latest trend</h3></center>
          <center>Explore our collection of trendy products.</center>
          <h1>Trending Products</h1>
        </div>
        <div className="products-container">
          {data.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="foot-container">
          <div className="foot">
            Ready to Shop?
          </div>
          <div className="foot1">
            Browse our wide range of products and grab the best deals!
          </div>
          <div className="button">
            <button
              onClick={handleStartShopping}
              className="shop-button"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;