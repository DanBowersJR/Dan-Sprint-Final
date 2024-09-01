import React, { createContext, useState } from "react";

// Creating a context for the shopping cart which can be accessed throughout the component tree.
export const ShoppingCartContext = createContext();

// Provider component to wrap the upper level of your app to provide cart state throughout.
export const ShoppingCartProvider = ({ children }) => {
  // State to keep track of items in the cart.
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart.
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Adds new product to the existing cart items.
  };

  // Function to remove an item from the cart based on index.
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Filters out the item at the specified index.
  };

  // Providing cart state and control functions to the component tree.
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children} // This is where child components will be rendered.
    </ShoppingCartContext.Provider>
  );
};
