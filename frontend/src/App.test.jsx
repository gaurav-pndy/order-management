import { render, screen } from "@testing-library/react";
import App from "./App";
import { CartProvider } from "./context/cartContext";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock("./services/api", () => ({
  fetchMenu: () =>
    Promise.resolve([
      {
        id: "1",
        name: "Pizza",
        description: "Test pizza",
        price: 200,
        image: "",
      },
    ]),
}));

test("renders menu items", async () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </MemoryRouter>,
  );

  expect(await screen.findByText("Pizza")).toBeInTheDocument();
});

test("adds item to cart", async () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </MemoryRouter>,
  );

  const addButton = await screen.findByText("Add to Cart");
  addButton.click();

  expect(await screen.findByText("Your Cart")).toBeInTheDocument();
  const pizzaItems = await screen.findAllByText("Pizza");
  expect(pizzaItems.length).toBeGreaterThan(1);
});
