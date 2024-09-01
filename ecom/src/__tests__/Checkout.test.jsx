import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Checkout from "../components/Checkout";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const mockCartItems = [
  { id: 1, product: "Product 1", price: 10 },
  { id: 2, product: "Product 2", price: 20 },
];

const MockShoppingCartProvider = ({ children }) => (
  <ShoppingCartContext.Provider value={{ cartItems: mockCartItems }}>
    {children}
  </ShoppingCartContext.Provider>
);

describe("Checkout Component", () => {
  test("displays the correct total cost", () => {
    render(
      <MockShoppingCartProvider>
        <Checkout />
      </MockShoppingCartProvider>
    );

    expect(screen.getByText(/Total Cost: \$30\.00/)).toBeInTheDocument();
  });

  test("handles checkout button click", () => {
    global.alert = jest.fn();

    render(
      <MockShoppingCartProvider>
        <Checkout />
      </MockShoppingCartProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Checkout/ }));

    expect(global.alert).toHaveBeenCalledWith(
      `Order Details:\n\nProduct 1 - $10\nProduct 2 - $20\n\nTotal Cost: $30.00\n\nCheckout successful!`
    );
  });
});
