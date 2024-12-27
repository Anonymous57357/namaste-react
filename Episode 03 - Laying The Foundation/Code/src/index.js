import React, { lazy, Suspense } from "react"; // somebody export default thats why we import
import ReactDom from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";

// dynamic bunding
// code splitting
// chunking
// lazy loading
// on demand loading
// dynamic import
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantMenu = lazy(() => import("./components/RestaurentMenu"));
const Error = lazy(() => import("./components/Error"));

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],

    errorElement: (
      <Suspense fallback={<Shimmer />}>
        <Error />,
      </Suspense>
    ),
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
