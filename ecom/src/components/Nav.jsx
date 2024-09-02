import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="navHeader">
        <h2>Dan's Fitness Gear</h2>
      </div>

      <div className="navItems">
        <div className="navShoppingCart" onClick={() => navigate("/cart")}>
          Shopping Cart
        </div>

        <div className="navCheckout" onClick={() => navigate("/checkout")}>
          Checkout
        </div>
      </div>
    </nav>
  );
};

export default Nav;
