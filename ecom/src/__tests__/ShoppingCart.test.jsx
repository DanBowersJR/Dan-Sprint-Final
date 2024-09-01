import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingCart from "../components/ShoppingCart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { BrowserRouter as Router } from "react-router-dom";

const cartItems = [
  {
    image: "test-image.png",
    product: "Test Product",
    description: "Test Description",
    price: 100,
  },
];

const renderWithContext = () => {
  return render(
    <Router>
      <ShoppingCartContext.Provider value={{ cartItems }}>
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    </Router>
  );
};

describe("ShoppingCart Component", () => {
  test("renders cart items correctly", () => {
    renderWithContext();

    const productNameElement = screen.getByText("Test Product");
    expect(productNameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement).toBeInTheDocument();

    const priceElement = screen.getByText("$100");
    expect(priceElement).toBeInTheDocument();

    const imageElement = screen.getByRole("img", { name: "Test Product" });
    expect(imageElement).toHaveAttribute("src", "test-image.png");
  });
});
