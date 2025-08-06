// src/pages/Cart/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from '../../context/CartContext';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // ✅ Added

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate(); // ✅ Added

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <a href="/products">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
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
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          </div>

          <div className="cart-price">Rs.{item.price}</div>
          <div className="cart-total">Rs.{(item.price * item.quantity).toFixed(2)}</div>

          <div className="cart-actions">
            <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <h3>Net Total: Rs.{Number(getCartTotal() || 0).toFixed(2)}</h3>


        <div className="cart-footer-buttons">
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



// components/Cart.js
// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './Cart.css'; // adjust if needed
// import { useCart } from '../../context/CartContext'; // ✅ NEW CONTEXT

// const Cart = () => {
//   const { state, dispatch } = useCart(); // ✅ use context
//   const cart = state.cart;

//   const netTotal = cart.reduce(
//     (total, product) => total + product.quantity * product.price,
//     0
//   );

//   const [showDetails, setShowDetails] = useState(false);
//   const [checkoutClicked, setCheckoutClicked] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors }
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (formData) => {
//     const checkoutData = {
//       cartData: cart,
//       formData,
//       netTotal,
//     };
//     dispatch({ type: 'SET_CHECKOUT_DATA', payload: checkoutData });
//     navigate('/thankyou');
//   };

//   return (
//     <>
//       <div className="cart-section">
//         <div className="cart-box">
//           <h2 className="cart-title">Your Cart</h2>
//           <div className="cart-header">
//             <div className="col-2 font-semibold">Product</div>
//             <div className="text-center font-semibold">Quantity</div>
//             <div className="text-center font-semibold">Amount</div>
//             <div className="text-center font-semibold">Total</div>
//             <div className="text-center font-semibold">Actions</div>
//           </div>

//           {cart.map((product) => (
//             <div key={product.id} className="cart-row">
//               <div className="col-2">{product.title}</div>
//               <div className="qty-section">
//                 <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: product.id })}>-</button>
//                 <div>{product.quantity}</div>
//                 <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: product.id })}>+</button>
//               </div>
//               <div className="text-center">Rs.{product.price}</div>
//               <div className="text-center">
//                 Rs.{(product.quantity * product.price).toFixed(2)}
//               </div>
//               <div className="text-center">
//                 <button
//                   className="delete-btn"
//                   onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="checkout-row">
//             <h3>Net Total: Rs.{netTotal.toFixed(2)}</h3>
//             {!checkoutClicked && (
//               <button
//                 disabled={cart.length <= 0}
//                 className={`checkout-btn ${cart.length <= 0 ? 'disabled' : ''}`}
//                 onClick={() => {
//                   setShowDetails(true);
//                   setCheckoutClicked(true);
//                 }}
//               >
//                 Checkout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {showDetails && (
//         <div className="form-section">
//           <div className="form-box">
//             <h2 className="cart-title">Your Details</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   id="name"
//                   {...register('name', { required: 'Name is required' })}
//                 />
//                 {errors.name && <p className="error">{errors.name.message}</p>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="billingAddress">Billing Address</label>
//                 <textarea
//                   id="billingAddress"
//                   {...register('billingAddress', {
//                     required: 'Billing address is required',
//                   })}
//                 />
//                 {errors.billingAddress && (
//                   <p className="error">{errors.billingAddress.message}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="deliveryAddress">Delivery Address</label>
//                 <textarea
//                   id="deliveryAddress"
//                   {...register('deliveryAddress', {
//                     required: 'Delivery address is required',
//                   })}
//                 />
//                 {errors.deliveryAddress && (
//                   <p className="error">{errors.deliveryAddress.message}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phoneNumber">Phone Number</label>
//                 <input
//                   id="phoneNumber"
//                   {...register('phoneNumber', {
//                     required: 'Phone number is required',
//                     pattern: {
//                       value: /^\d{10}$/,
//                       message: 'Phone number must be exactly 10 digits',
//                     },
//                   })}
//                 />
//                 {errors.phoneNumber && (
//                   <p className="error">{errors.phoneNumber.message}</p>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label>Select Delivery Date</label>
//                 <Controller
//                   control={control}
//                   name="deliveryDate"
//                   rules={{ required: 'Delivery date is required' }}
//                   render={({ field }) => (
//                     <DatePicker
//                       selected={field.value}
//                       onChange={field.onChange}
//                       placeholderText="dd/mm/yyyy"
//                       dateFormat="dd/MM/yyyy"
//                     />
//                   )}
//                 />
//                 {errors.deliveryDate && (
//                   <p className="error">{errors.deliveryDate.message}</p>
//                 )}
//               </div>

//               <div className="form-actions">
//                 <button type="button" className="cancel-btn" onClick={() => {
//                   setShowDetails(false);
//                   setCheckoutClicked(false);
//                   reset();
//                 }}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="confirm-btn">
//                   Checkout
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
