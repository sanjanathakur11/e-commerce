import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 👇 Suppress the ResizeObserver warning (must come BEFORE render)
if (process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = function (...args) {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      args[0].includes("ResizeObserver loop completed with undelivered notifications")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// Optional performance logging
reportWebVitals();

