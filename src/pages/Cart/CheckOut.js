import React from "react";
import { useForm } from "react-hook-form";
import "./CheckOut.css";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Order Submitted:", data);
    alert("Order placed successfully!");
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        {/* Billing Address */}
        <div className="form-group">
          <label>Billing Address</label>
          <input
            {...register("billingAddress", {
              required: "Billing Address is required",
            })}
            type="text"
            placeholder="Enter billing address"
          />
          {errors.billingAddress && (
            <span className="error">{errors.billingAddress.message}</span>
          )}
        </div>

        {/* Delivery Address */}
        <div className="form-group">
          <label>Delivery Address</label>
          <input
            {...register("deliveryAddress", {
              required: "Delivery Address is required",
            })}
            type="text"
            placeholder="Enter delivery address"
          />
          {errors.deliveryAddress && (
            <span className="error">{errors.deliveryAddress.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone Number must be 10 digits",
              },
            })}
            type="tel"
            placeholder="Enter 10-digit phone number"
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber.message}</span>
          )}
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Date</label>
          <input
            {...register("date", {
              required: "Date is required",
              validate: (value) =>
                value >= today || "Date cannot be in the past",
            })}
            type="date"
          />
          {errors.date && <span className="error">{errors.date.message}</span>}
        </div>

        
        <div className="button-row">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button type="submit" className="checkout-btn">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
