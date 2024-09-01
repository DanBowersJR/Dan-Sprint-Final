import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Nav.css";

// Nav component for top navigation bar
const Nav = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <nav className="nav">
      <div className="navHeader">
        <h2>Dan's Fitness Gear</h2> // Branding header
      </div>

      <div className="navItems">
        // Button-like div for navigating to the shopping cart
        <div className="navShoppingCart" onClick={() => navigate("/cart")}>
          Shopping Cart
        </div>
        // Button-like div for navigating to the checkout page
        <div className="navCheckout" onClick={() => navigate("/checkout")}>
          Checkout
        </div>
      </div>
    </nav>
  );
};

export default Nav;
