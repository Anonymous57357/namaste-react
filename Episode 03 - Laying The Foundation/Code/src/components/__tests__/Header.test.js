import { fireEvent, render, screen } from "@testing-library/react";
import Head from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load a header component with a login button", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );

  // querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();

  // asserting
});

it("should load a header component with a cart item 0", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );

  // querying
  const cartItem = screen.getByText("Cart (0 items)");

  //   const cartItem = screen.getByText("Login");

  expect(cartItem).toBeInTheDocument();

  // asserting
});

it("should load a header component with a cart", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );

  // querying
  const cartItem = screen.getByText(/Cart/);

  //   const cartItem = screen.getByText("Login");

  expect(cartItem).toBeInTheDocument();

  // asserting
});

it("should change login button to logout onclick event", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );

  // querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();

  // asserting
});

it("should change logout button to login onlclick event", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  console.log(logoutButton);
  fireEvent.click(logoutButton);
  // const loginButton = screen.getByRole("button", { name: "Login" });
  // expect(loginButton).toBeInTheDocument();
});
