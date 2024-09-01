import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BroweserRouter as Router } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ProductList from "../components/ProductList";
import { getProducts } from "../api/api";

jest.mock("../api/api");

describe("ProductList", () => {
  const mockAddToCart = jest.fn();
  const mockProductList = [
    { id: 1, product: "product 1", price: 13 },
    { id: 2, product: "product 2", price: 10 },
    { id: 3, product: "product 3", price: 19 },
  ];

  beforeEach(() => {
    getProducts.mockReturnValue(mockProductList);
  });

  test("ensures add to cart is being called when button is clicked", () => {
    render(
      <ShoppingCartContext.Provider value={{ addToCart: mockAddToCart }}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </ShoppingCartContext.Provider>
    );

    const addToCartBtns = screen.getAllByText("Add to Cart");
    addToCartBtns[0].click();

    expect(mockAddToCart).toHaveBeenCalledWith(mockProductList[0]);
  });
});
