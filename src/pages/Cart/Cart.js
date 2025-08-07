// // src/pages/Cart/Cart.js
// import React from 'react';
// import './Cart.css';
// import { useCart } from '../../context/CartContext';
// import { Rating } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // ✅ Added

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
//   const navigate = useNavigate(); // ✅ Added

//   const handleQuantityChange = (productId, newQuantity) => {
//     if (newQuantity >= 1) {
//       updateQuantity(productId, newQuantity);
//     }
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="cart">
//         <h1>Your Cart</h1>
//         <div className="empty-cart">
//           <p>Your cart is empty</p>
//           <a href="/products">Continue Shopping</a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       <div className="cart-header">
//         <span>Product</span>
//         <span>Quantity</span>
//         <span>Amount</span>
//         <span>Total</span>
//         <span>Actions</span>
//       </div>

//       {cartItems.map(item => (
//         <div key={item.id} className="cart-row">
//           <div className="cart-product-info">
//             <img src={item.thumbnail} alt={item.title} />
//             <div>
//               <h4>{item.title}</h4>
//               <p>{item.brand}</p>
//               <Rating value={item.rating} readOnly size="small" />
//             </div>
//           </div>

//           <div className="cart-quantity">
//             <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//             <span>{item.quantity}</span>
//             <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//           </div>

//           <div className="cart-price">Rs.{item.price}</div>
//           <div className="cart-total">Rs.{(item.price * item.quantity).toFixed(2)}</div>

//           <div className="cart-actions">
//             <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
//           </div>
//         </div>
//       ))}

//       <div className="cart-footer">
//         <h3>Net Total: Rs.{Number(getCartTotal() || 0).toFixed(2)}</h3>


//         <div className="cart-footer-buttons">
//           <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
//           <button className="checkout-btn" onClick={() => navigate('/checkout')}>Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import './Cart.css';
import { useCart } from '../../context/CartContext';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
      toast.success('Quantity updated!');
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <Toaster position="top-right" />
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button 
            className="continue-shopping-btn" 
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <Toaster position="top-right" />
      <h2>Your Cart</h2>
      <div className="cart-header">
        <span>Product</span>
        <span>Quantity</span>
        <span>Amount</span>
        <span>Total</span>
        <span>Actions</span>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="cart-row">
          <div className="cart-product-info">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.brand}</p>
              <Rating value={item.rating} readOnly size="small" />
            </div>
          </div>

          <div className="cart-quantity">
            <button 
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="quantity-btn"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>

          <div className="cart-price">Rs.{item.price}</div>
          <div className="cart-total">Rs.{(item.price * item.quantity).toFixed(2)}</div>

          <div className="cart-actions">
            <button 
              className="delete-btn" 
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <h3>Net Total: Rs.{Number(getCartTotal() || 0).toFixed(2)}</h3>
        <div className="cart-footer-buttons">
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;