import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/api";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import "../styles/ProductDetails.css";

// ProductDetails component displays the details of a specific product
const ProductDetails = () => {
  const { productId } = useParams(); // Extracts productId from the URL parameters
  const product = getProductById(parseInt(productId)); // Fetch the product details using the productId
  const { addToCart } = useContext(ShoppingCartContext); // Access the addToCart function from context

  // Display a message if the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Render the product details
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1> // Product name
        <p>{product.description}</p> // Product description
        <p>Price: ${product.price}</p> // Display product price
        <button onClick={() => addToCart(product)}>Add to Cart</button> //
        Button to add product to cart
        <Link to="/cart" className="cart-link">
          Go to Shopping Cart
        </Link>{" "}
        // Link to view the shopping cart
      </div>
    </div>
  );
};

export default ProductDetails;
